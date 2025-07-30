export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About ConnEthics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ConnEthics is founded on the principles of ethical connections. We build 
            products and animate business ecosystems based on radical candor, integrity, 
            and innovation, bringing clarity and purpose to challenging environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to foster ethical connections in a competitive world, bringing 
              clarity and purpose to challenging environments. We deliver high-quality 
              services that seamlessly align technical, operational, and execution 
              strategies with today's business standards.
            </p>
            <p className="text-lg text-gray-600">
              We ensure ethical alignment across external business goals, internal team 
              dynamics, our technical stack, and the broader societal context through 
              self-sovereign identity, competitive intelligence, and strategic product leadership.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Radical Candor:</strong> Honest, direct communication that builds trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Integrity:</strong> Ethical consideration in every business decision</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Innovation:</strong> Cutting-edge solutions for competitive environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Strategic Alignment:</strong> Connecting technical excellence with business goals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Started ConnEthics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In today's competitive business landscape, organizations need more than just 
              technical solutions—they need ethical frameworks that create sustainable 
              competitive advantage. We recognized the urgent need for services that combine 
              self-sovereign identity, strategic intelligence, and product leadership 
              to build trust in complex ecosystems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Identify Challenges</h3>
              <p className="text-gray-600">We saw organizations struggling with identity management, competitive intelligence, and product strategy alignment.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Develop Solutions</h3>
              <p className="text-gray-600">We created comprehensive methodologies for self-sovereign identity, ecosystem analysis, and product leadership.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drive Impact</h3>
              <p className="text-gray-600">We help organizations build ethical business ecosystems that create sustainable competitive advantage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
