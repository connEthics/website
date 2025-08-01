/**
 * Détection de bots côté serveur basée sur les en-têtes HTTP
 * et les patterns d'User-Agent connus
 */

export interface BotDetectionResult {
  isBot: boolean;
  confidence: number;
  reasons: string[];
  userAgent?: string;
}

// Liste des User-Agents de bots connus
const KNOWN_BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /slurp/i, // Yahoo
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /whatsapp/i,
  /telegrambot/i,
  /curl/i,
  /wget/i,
  /python/i,
  /node/i,
  /axios/i,
  /postman/i,
  /httpie/i,
  /insomnia/i,
  /scrapy/i,
  /selenium/i,
  /phantomjs/i,
  /headless/i,
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
];

// En-têtes suspects
const SUSPICIOUS_HEADERS = [
  'x-forwarded-for', // Multiple proxies
  'x-real-ip',
  'x-cluster-client-ip',
];

export function detectServerSideBot(request: Request): BotDetectionResult {
  const userAgent = request.headers.get('user-agent') || '';
  
  // En mode développement, on désactive la détection de bot
  if (process.env.NODE_ENV === 'development') {
    console.log('Bot detection disabled in development mode (server-side)');
    return {
      isBot: false,
      confidence: 0,
      reasons: ['dev_mode_disabled'],
      userAgent
    };
  }

  const reasons: string[] = [];
  let confidence = 0;

  // 1. Vérifier l'User-Agent
  if (!userAgent) {
    reasons.push('missing_user_agent');
    confidence += 0.8;
  } else {
    // Vérifier les patterns de bots connus
    for (const pattern of KNOWN_BOT_PATTERNS) {
      if (pattern.test(userAgent)) {
        reasons.push(`bot_pattern_${pattern.source}`);
        confidence += 0.9;
        break;
      }
    }

    // User-Agent trop court (suspect)
    if (userAgent.length < 10) {
      reasons.push('short_user_agent');
      confidence += 0.6;
    }

    // Absence de navigateur typique
    if (!userAgent.includes('Mozilla') && !userAgent.includes('Chrome') && !userAgent.includes('Safari')) {
      reasons.push('non_browser_agent');
      confidence += 0.7;
    }
  }

  // 2. Vérifier les en-têtes Accept
  const accept = request.headers.get('accept') || '';
  if (!accept.includes('text/html')) {
    reasons.push('no_html_accept');
    confidence += 0.5;
  }

  // 3. Vérifier la présence d'en-têtes de navigateur typiques
  const hasAcceptLanguage = request.headers.has('accept-language');
  const hasAcceptEncoding = request.headers.has('accept-encoding');
  
  if (!hasAcceptLanguage) {
    reasons.push('missing_accept_language');
    confidence += 0.4;
  }
  
  if (!hasAcceptEncoding) {
    reasons.push('missing_accept_encoding');
    confidence += 0.4;
  }

  // 4. Vérifier les en-têtes de proxy multiples (indicateur de bot/scraper)
  let proxyCount = 0;
  SUSPICIOUS_HEADERS.forEach(header => {
    const value = request.headers.get(header);
    if (value) {
      proxyCount++;
      // Plusieurs IPs dans x-forwarded-for
      if (header === 'x-forwarded-for' && value.split(',').length > 2) {
        reasons.push('multiple_proxies');
        confidence += 0.3;
      }
    }
  });

  if (proxyCount > 1) {
    reasons.push('multiple_proxy_headers');
    confidence += 0.3;
  }

  // 5. Requêtes trop rapides (à implémenter avec un cache Redis en production)
  // Pour l'instant, on peut vérifier la présence de certains headers de rate limiting

  const isBot = confidence > 0.7;

  return {
    isBot,
    confidence: Math.min(confidence, 1.0),
    reasons,
    userAgent
  };
}

/**
 * Middleware pour protéger les routes contre les bots (version Next.js)
 */
export function withBotProtection(handler: (request: Request) => Promise<Response>) {
  return async (request: Request): Promise<Response> => {
    const detection = detectServerSideBot(request);
    
    // Log pour monitoring
    if (detection.isBot) {
      console.warn('Bot détecté:', {
        url: request.url,
        userAgent: detection.userAgent,
        confidence: detection.confidence,
        reasons: detection.reasons,
        timestamp: new Date().toISOString()
      });
    }

    // En mode développement, on laisse passer mais on log
    if (process.env.NODE_ENV === 'development') {
      console.log('Bot detection (dev mode):', detection);
      return handler(request);
    }

    // En production, bloquer les bots avec haute confiance
    if (detection.isBot && detection.confidence > 0.8) {
      return new Response(
        JSON.stringify({
          error: 'Access denied',
          message: 'Automated access is not permitted',
          code: 'BOT_DETECTED'
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Bot-Detection': 'true',
            'X-Bot-Confidence': detection.confidence.toString()
          }
        }
      );
    }

    return handler(request);
  };
}

/**
 * Version spécifique pour Next.js avec NextRequest
 */
export function withNextBotProtection<T extends Response>(handler: (request: any) => Promise<T>) {
  return async (request: any): Promise<T | Response> => {
    // Convertir NextRequest en Request pour la détection
    const standardRequest = new Request(request.url, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    
    const detection = detectServerSideBot(standardRequest);
    
    // Log pour monitoring
    if (detection.isBot) {
      console.warn('Bot détecté:', {
        url: request.url,
        userAgent: detection.userAgent,
        confidence: detection.confidence,
        reasons: detection.reasons,
        timestamp: new Date().toISOString()
      });
    }

    // En mode développement, on laisse passer mais on log
    if (process.env.NODE_ENV === 'development') {
      console.log('Bot detection (dev mode):', detection);
      return handler(request);
    }

    // En production, bloquer les bots avec haute confiance
    if (detection.isBot && detection.confidence > 0.8) {
      return new Response(
        JSON.stringify({
          error: 'Access denied',
          message: 'Automated access is not permitted',
          code: 'BOT_DETECTED'
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Bot-Detection': 'true',
            'X-Bot-Confidence': detection.confidence.toString()
          }
        }
      ) as T | Response;
    }

    return handler(request);
  };
}
