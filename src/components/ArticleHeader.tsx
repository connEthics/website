'use client';

interface ArticleHeaderProps {
  title: string;
  description: string;
  tags: string[];
  targetAudience?: string;
  keyTakeaways?: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  publishedDate?: string;
  readTime?: string;
}

export default function ArticleHeader({
  title,
  description,
  tags,
  targetAudience,
  keyTakeaways,
  difficulty,
  publishedDate,
  readTime
}: ArticleHeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        {difficulty && (
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {difficulty}
          </span>
        )}
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
        {(readTime || publishedDate) && (
          <div className="flex items-center text-slate-500 text-sm ml-auto sm:ml-0 gap-3">
            {readTime && (
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {readTime}
              </span>
            )}
            {publishedDate && (
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5" />
                </svg>
                {publishedDate}
              </span>
            )}
          </div>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        {description}
      </p>

      {/* Key Takeaways & Target Audience Box */}
      {(targetAudience || (keyTakeaways && keyTakeaways.length > 0)) && (
        <div className="bg-white border-l-4 border-blue-500 shadow-md rounded-r-lg p-6 mb-8">
          {targetAudience && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                Pour qui ?
              </h4>
              <p className="text-slate-700 font-medium">
                {targetAudience}
              </p>
            </div>
          )}
          
          {keyTakeaways && keyTakeaways.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Ce que vous allez apprendre
              </h4>
              <ul className="space-y-2">
                {keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start text-slate-700">
                    <span className="text-blue-500 mr-2 font-bold">•</span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
