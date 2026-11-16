import { getLegalDocument } from '@/lib/legal-utils';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function SalesTermsAndConditions() {
  const document = await getLegalDocument('sales-terms-and-conditions');
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <p className="text-gray-600 text-sm">
              <strong>Last updated:</strong> {document.metadata.lastUpdated}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Effective date:</strong> {document.metadata.effectiveDate}
            </p>
          </div>

          <MarkdownRenderer content={document.content} />

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Document version: {document.metadata.version} | Last updated: {document.metadata.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
