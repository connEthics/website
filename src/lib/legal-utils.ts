import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export interface LegalDocument {
  content: string;
  metadata: {
    title: string;
    lastUpdated: string;
    effectiveDate: string;
    version: string;
  };
}

export async function getLegalDocument(documentName: string): Promise<LegalDocument> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'legal', `${documentName}.md`);
    
    if (!fs.existsSync(filePath)) {
      notFound();
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract metadata from the markdown content
    const lines = content.split('\n');
    const metadata = extractMetadata(lines);
    
    return {
      content,
      metadata
    };
  } catch (error) {
    console.error('Error reading legal document:', error);
    notFound();
  }
}

function extractMetadata(lines: string[]) {
  const metadata = {
    title: '',
    lastUpdated: '',
    effectiveDate: '',
    version: '1.0'
  };
  
  // Extract title from first heading
  const titleLine = lines.find(line => line.startsWith('# '));
  if (titleLine) {
    metadata.title = titleLine.replace('# ', '').trim();
  }
  
  // Extract dates from the document
  const lastUpdatedLine = lines.find(line => line.includes('Last updated:'));
  if (lastUpdatedLine) {
    const match = lastUpdatedLine.match(/Last updated:\*\*\s*(.+)/);
    if (match) {
      metadata.lastUpdated = match[1].trim();
    }
  }
  
  const effectiveLine = lines.find(line => line.includes('Effective date:'));
  if (effectiveLine) {
    const match = effectiveLine.match(/Effective date:\*\*\s*(.+)/);
    if (match) {
      metadata.effectiveDate = match[1].trim();
    }
  }
  
  // Extract version from bottom of document
  const versionLine = lines.find(line => line.includes('Document version:'));
  if (versionLine) {
    const match = versionLine.match(/Document version:\s*([0-9.]+)/);
    if (match) {
      metadata.version = match[1];
    }
  }
  
  return metadata;
}

export function getAllLegalDocuments(): string[] {
  const legalDir = path.join(process.cwd(), 'src', 'content', 'legal');
  
  if (!fs.existsSync(legalDir)) {
    return [];
  }
  
  return fs.readdirSync(legalDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}
