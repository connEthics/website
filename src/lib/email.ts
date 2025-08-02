import nodemailer from 'nodemailer';

// Email configuration
const createTransporter = () => {
  // In production, configure with your email service (SendGrid, AWS SES, etc.)
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // App-specific password
      },
    });
  }
  
  // Default SMTP configuration
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_APP_PASSWORD,
    },
  });
};

export async function sendPortalAccessEmail(
  customerEmail: string, 
  accessUrl: string,
  customerName?: string
) {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"ConnEthics Customer Support" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: 'Secure Access to Your ConnEthics Customer Portal',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Customer Portal Access</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">ConnEthics Customer Portal</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #2d3748; margin-bottom: 20px;">
              ${customerName ? `Hi ${customerName}` : 'Hello'},
            </h2>
            
            <p style="margin-bottom: 20px;">
              You requested access to your ConnEthics customer portal. Click the secure link below to manage your subscription, payment methods, and billing information.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${accessUrl}" 
                 style="background: #4299e1; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                Access Customer Portal
              </a>
            </div>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0; font-size: 16px;">🔒 Security Information</h3>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>This link is valid for <strong>30 minutes</strong></li>
                <li>It can only be used <strong>once</strong></li>
                <li>If the link expires, you can request a new one</li>
              </ul>
            </div>
            
            <p style="color: #718096; font-size: 14px; margin-top: 30px;">
              If you didn't request this access link, please ignore this email or contact our support team if you have concerns.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            
            <div style="text-align: center; color: #718096; font-size: 14px;">
              <p>ConnEthics - AI Ethics Consulting</p>
              <p>
                <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact" style="color: #4299e1;">Contact Support</a> |
                <a href="${process.env.NEXT_PUBLIC_BASE_URL}/privacy" style="color: #4299e1;">Privacy Policy</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        ConnEthics Customer Portal Access

        ${customerName ? `Hi ${customerName}` : 'Hello'},

        You requested access to your ConnEthics customer portal. Use the link below to manage your subscription, payment methods, and billing information.

        Access Link: ${accessUrl}

        Security Information:
        - This link is valid for 30 minutes
        - It can only be used once
        - If the link expires, you can request a new one

        If you didn't request this access link, please ignore this email or contact our support team.

        ConnEthics - AI Ethics Consulting
        Contact: ${process.env.NEXT_PUBLIC_BASE_URL}/contact
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Portal access email sent:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Failed to send portal access email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendWelcomeEmail(
  customerEmail: string,
  customerName?: string,
  serviceName?: string
) {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"ConnEthics Team" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Welcome to ConnEthics${serviceName ? ` - ${serviceName}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to ConnEthics</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to ConnEthics!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #2d3748; margin-bottom: 20px;">
              ${customerName ? `Hi ${customerName}` : 'Hello'},
            </h2>
            
            <p style="margin-bottom: 20px;">
              Thank you for choosing ConnEthics! ${serviceName ? `Your ${serviceName} subscription is now active.` : 'Your subscription is now active.'}
            </p>
            
            <p style="margin-bottom: 20px;">
              We'll be in touch within 24 hours to schedule your first session and discuss your specific needs and goals.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/customer-portal" 
                 style="background: #4299e1; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; margin-right: 10px;">
                Manage Subscription
              </a>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact" 
                 style="background: #e2e8f0; color: #2d3748; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                Contact Us
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            
            <div style="text-align: center; color: #718096; font-size: 14px;">
              <p>ConnEthics - AI Ethics Consulting</p>
              <p>Empowering responsible AI innovation</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Failed to send welcome email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
