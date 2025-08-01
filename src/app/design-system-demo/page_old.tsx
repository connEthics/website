'use client';

import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export default function DesignSystemDemo() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          ConnEthics Design System
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Démonstration interactive du système de thème avec transitions fluides et adaptation complète des couleurs, typographies et arrière-plans.
        </p>
        
        {/* Theme Status */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-800 rounded-lg">
          <span className="text-sm font-medium text-primary-800 dark:text-primary-200">
            Mode actuel : <strong>{theme === 'system' ? `Système (${resolvedTheme})` : theme}</strong>
          </span>
        </div>
        
        {/* Override Status Indicator */}
        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg max-w-2xl mx-auto">
          <div className="text-green-800 dark:text-green-200 font-medium text-sm">
            ✅ Préférences Utilisateur Prioritaires
          </div>
          <div className="text-green-600 dark:text-green-400 text-xs mt-1">
            Les choix utilisateur priment sur les paramètres système
          </div>
        </div>
      </div>

      {/* Instructions */}
      <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Test de Priorité Utilisateur sur Système
        </h2>
        <div className="space-y-3 text-gray-600 dark:text-gray-400">
          <p>
            🎨 <strong>Utilisez le sélecteur de thème</strong> dans la navigation pour basculer entre les modes
          </p>
          <p>
            🔄 <strong>Modes disponibles :</strong> Système → Clair → Sombre → Système
          </p>
          <p>
            ✨ <strong>Observez les transitions fluides</strong> de tous les éléments
          </p>
          'use client';

export default function DesignSystemDemo() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ConnEthics Design System</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Clean, professional design components optimized for light mode experience.
        </p>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
            <div key={shade} className="text-center">
              <div 
                className={`w-full h-20 rounded-lg mb-2 bg-primary-${shade}`}
                style={{ backgroundColor: `var(--color-primary-${shade})` }}
              ></div>
              <p className="text-sm text-gray-600">primary-{shade}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Heading 1 - Main Title</h1>
            <p className="text-sm text-gray-500 mt-1">text-4xl font-bold</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Heading 2 - Section Title</h2>
            <p className="text-sm text-gray-500 mt-1">text-3xl font-semibold</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-900">Heading 3 - Subsection</h3>
            <p className="text-sm text-gray-500 mt-1">text-2xl font-medium</p>
          </div>
          <div>
            <p className="text-lg text-gray-700">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-500 mt-1">text-lg text-gray-700</p>
          </div>
          <div>
            <p className="text-base text-gray-600">Body - Standard paragraph text with good readability and contrast.</p>
            <p className="text-sm text-gray-500 mt-1">text-base text-gray-600</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Small - Secondary information and captions.</p>
            <p className="text-sm text-gray-500 mt-1">text-sm text-gray-500</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Primary</h3>
            <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer">
              Primary Button
            </button>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Secondary</h3>
            <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors cursor-pointer">
              Secondary Button
            </button>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Outline</h3>
            <button className="w-full px-4 py-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg transition-colors cursor-pointer">
              Outline Button
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Simple Card
            </h3>
            <p className="text-gray-600 mb-4">
              Clean design with subtle shadow and border.
            </p>
            <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer">
              Action
            </button>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-3">
              Accent Card
            </h3>
            <p className="text-primary-700 mb-4">
              Using primary colors for emphasis.
            </p>
            <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors cursor-pointer">
              Action
            </button>
          </div>
          
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-lg text-white shadow-xl overflow-hidden">
            {/* Background pattern for better texture */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-3 text-white drop-shadow-sm">
                Gradient Card
              </h3>
              <p className="text-white text-opacity-90 mb-4 drop-shadow-sm">
                Beautiful gradient with optimal contrast and perfect readability.
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-500 backdrop-blur-sm text-white border border-primary-500 border-opacity-60 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl cursor-pointer">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg">
          <div className="text-yellow-800 dark:text-yellow-200 font-medium text-sm mb-2">
            🚀 Améliorations Techniques Appliquées
          </div>
          <ul className="text-yellow-700 dark:text-yellow-300 text-xs space-y-1">
            <li>• CSS color-scheme: only light/dark pour forcer les préférences</li>
            <li>• Tailwind darkMode: class au lieu de media queries système</li>
            <li>• ThemeProvider avec override agressif des paramètres système</li>
            <li>• Meta theme-color dynamique pour la barre d&apos;état mobile</li>
            <li>• Script anti-flash avec priorité localStorage</li>
          </ul>
        </div>
      </section>

      {/* Color Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Palette de Couleurs Adaptatives
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
            <div key={shade} className="space-y-2">
              <div 
                className={`w-full h-16 rounded-lg bg-primary-${shade} border border-gray-200 dark:border-gray-700`}
              />
              <div className="text-center">
                <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {shade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Card Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Cartes Adaptatives
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Carte Standard
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Arrière-plan adaptatif qui change selon le thème.
            </p>
            <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer">
              Action
            </button>
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border border-primary-200 dark:border-primary-700">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3">
              Carte Accent
            </h3>
            <p className="text-primary-700 dark:text-primary-300 mb-4">
              Utilisation des couleurs primaires adaptatives.
            </p>
            <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors cursor-pointer">
              Action
            </button>
          </div>
          
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 p-6 rounded-lg text-white shadow-xl overflow-hidden">
            {/* Background pattern for better texture */}
            <div className="absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-3 text-white drop-shadow-sm">
                Carte Dégradé
              </h3>
              <p className="text-white text-opacity-90 dark:text-white dark:text-opacity-95 mb-4 drop-shadow-sm">
                Dégradés harmonieux avec contraste optimal et lisibilité parfaite.
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-500 backdrop-blur-sm text-white border border-primary-500 border-opacity-60 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl cursor-pointer">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}