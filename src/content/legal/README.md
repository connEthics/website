# Legal Documents Maintenance Guide

## Overview

The legal documents for ConnEthics are now maintained as separate Markdown files for easier editing and version control. This system provides better maintainability, version tracking, and allows non-technical team members to update legal content without touching React code.

## Structure

```
src/
├── content/
│   └── legal/
│       ├── terms-of-purchase.md
│       ├── general-purchasing-conditions.md
│       └── ssip-safety-schemes.md
├── lib/
│   └── legal-utils.ts                 # Utility functions for reading markdown
├── components/
│   └── MarkdownRenderer.tsx           # Component for rendering markdown with custom styling
└── app/legal/
    ├── page.tsx                       # Legal hub page with navigation
    ├── terms-of-purchase/page.tsx     # Terms of Purchase page (reads from markdown)
    ├── general-purchasing-conditions/page.tsx  # GPC page (reads from markdown)
    └── ssip-safety-schemes/page.tsx   # SSIP page (reads from markdown)
```

## How to Update Legal Documents

### 1. Editing Content

To update any legal document:

1. Navigate to `src/content/legal/`
2. Open the relevant `.md` file in any text editor
3. Make your changes using standard Markdown syntax
4. Save the file

The website will automatically reflect the changes after the next deployment.

### 2. Markdown Syntax Guide

#### Basic Formatting
```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection Heading (H3)

**Bold text**
*Italic text*

- Bullet point
- Another bullet point

1. Numbered list
2. Second item

[Link text](https://example.com)
```

#### Special Callouts

The system recognizes special blockquotes for visual emphasis with automatic color coding:

**Red Blocks (Warnings/Mandatory Requirements):**
```markdown
> **⚠️ Mandatory Requirement:** Critical requirements that must be followed

> **Warning:** Important warnings or alerts

> **Required:** Essential requirements

> **Must comply:** Compliance-related mandatory items
```

**Green Blocks (Success/Approval/Positive):**
```markdown
> **✅ Approval Criteria:** Positive criteria or approval information

> **Success:** Success stories or positive outcomes

> **Approved:** Approved processes or items

> **Compliance achieved:** Successfully met requirements
```

**Blue Blocks (Information/Context/Notes):**
```markdown
> **📋 Regulatory Context:** Regulatory or contextual information

> **Information:** General informational content

> **Note:** Important notes or observations

> **Important:** Key information to remember
```

**Yellow Blocks (Legal/Caution/Attention):**
```markdown
> **⚖️ Legal Compliance:** Legal requirements or compliance information

> **Caution:** Situations requiring careful attention

> **Attention:** Items requiring special attention

> **Statutory:** Legal or statutory requirements
```

**Example usage:**
```markdown
> **⚠️ Mandatory Requirement:** All suppliers must complete safety training before starting work.

> **✅ Approval Criteria:** Suppliers must achieve a minimum safety score of 80% to be approved.

> **📋 Regulatory Context:** These requirements align with French labor law and EU directives.

> **⚖️ Legal Compliance:** Suppliers must comply with all statutory reporting requirements.
```

### 3. Document Metadata

Each document automatically extracts metadata from the content:

- **Title:** First H1 heading (`# Title`)
- **Last Updated:** Text following "**Last updated:**"
- **Effective Date:** Text following "**Effective date:**"
- **Version:** Extracted from version line at bottom

### 4. Adding New Legal Documents

To add a new legal document:

1. Create a new `.md` file in `src/content/legal/`
2. Follow the existing format with metadata at the top
3. Create a new page component in `src/app/legal/[document-name]/page.tsx`:

```tsx
import { getLegalDocument } from '@/lib/legal-utils';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function DocumentName() {
  const document = await getLegalDocument('your-file-name');
  
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
```

4. Update `src/app/legal/page.tsx` to include a link to the new document

## Version Control Best Practices

### 1. Document Versioning

When making significant changes:

1. Update the version number in the document footer
2. Update the "Last updated" date
3. Consider keeping a changelog section if major revisions are made

### 2. Git Commits

Use descriptive commit messages for legal changes:

```bash
git add src/content/legal/terms-of-purchase.md
git commit -m "legal: Update Terms of Purchase pricing for 2025"

git add src/content/legal/general-purchasing-conditions.md
git commit -m "legal: Add new SSIP safety requirements to GPC"
```

### 3. Review Process

For legal document changes:

1. Create a pull request with the changes
2. Have legal team review the markdown content
3. Test the rendering on the development environment
4. Merge after approval

## Technical Details

### Markdown Processing

- Uses `react-markdown` with `remark-gfm` for GitHub Flavored Markdown support
- Custom component mapping for consistent styling
- Automatic handling of links, lists, tables, and code blocks

### Performance

- Documents are read at build time (SSG - Static Site Generation)
- No runtime markdown parsing in production
- Fast page loads with pre-rendered content

### SEO Benefits

- Clean, semantic HTML output
- Proper heading hierarchy for search engines
- Fast loading times improve search rankings

## Troubleshooting

### Common Issues

1. **Markdown not rendering correctly**: Check for syntax errors in the `.md` file
2. **Missing metadata**: Ensure the document follows the required format
3. **Styling issues**: Check the `MarkdownRenderer` component for custom styling rules

### Testing Changes

1. Run the development server: `npm run dev`
2. Navigate to the legal document page
3. Verify the content renders correctly
4. Check for any console errors

## Contact

For technical issues with the markdown system:
- **Development team:** technical@connethics.com

For legal content updates:
- **Legal team:** legal@connethics.com
