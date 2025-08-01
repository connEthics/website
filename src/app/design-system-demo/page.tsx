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
