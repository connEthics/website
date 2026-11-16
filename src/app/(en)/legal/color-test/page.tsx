import { getLegalDocument } from '@/lib/legal-utils';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function ColorTest() {
  const document = await getLegalDocument('color-test');
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <MarkdownRenderer content={document.content} />
        </div>
      </div>
    </div>
  );
}
