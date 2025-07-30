export default function Insights() {
  const articles = [
    {
      title: "The Future of Self-Sovereign Identity in Enterprise",
      excerpt: "Exploring how SSI will transform enterprise identity management and create new opportunities for secure, user-controlled digital interactions.",
      date: "July 25, 2025",
      category: "Self-Sovereign Identity",
      readTime: "5 min read"
    },
    {
      title: "Competitive Intelligence in the Digital Age",
      excerpt: "Understanding economic warfare analysis and how modern businesses can gain strategic advantages through comprehensive ecosystem mapping.",
      date: "July 20, 2025", 
      category: "Ecosystem Cartography",
      readTime: "7 min read"
    },
    {
      title: "Building Trust Through Verifiable Credentials",
      excerpt: "How organizations can implement verifiable credential systems to enhance trust and streamline identity verification processes.",
      date: "July 15, 2025",
      category: "Trust & Identity",
      readTime: "6 min read"
    },
    {
      title: "Product Leadership in Ethical Business Ecosystems",
      excerpt: "Aligning product roadmaps with ethical frameworks while maintaining competitive advantage and driving innovation.",
      date: "July 10, 2025",
      category: "Product Leadership", 
      readTime: "8 min read"
    }
  ];

  const categories = [
    "All",
    "Self-Sovereign Identity",
    "Ecosystem Cartography", 
    "Trust & Identity",
    "Product Leadership",
    "Business Ethics"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thought leadership on ethical business practices, competitive intelligence, 
            and building trust in complex digital ecosystems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {articles.map((article, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-900 cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <button className="text-blue-900 font-medium hover:text-blue-800 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-900 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest insights on ethical business practices, competitive intelligence, 
            and digital identity innovations delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
