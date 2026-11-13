# Article PDFs

PDF copies of your articles live in this folder. They are offered on the Article Downloads page (`/downloads`).

## Adding an article

1. Put the PDF here (lowercase-with-dashes names work best, for example `my-new-article.pdf`).
2. Add one entry to `articleDownloads` in `src/data/articles.js`. Its `file` value must match the PDF's file name exactly.
3. Optional: put a cover preview in the `previews/` folder with the same name as the PDF but ending in `.webp` (for example `previews/my-new-article.webp`). Use a landscape image about 640 px wide. Without it, the card is text-only.

## How it works

When the site is built (`npm run build`, or refreshed in `npm run dev`), the page checks which files exist:

- A PDF that exists shows **Download PDF** and its file size. A missing PDF shows **PDF coming soon**.
- A preview that exists is shown on the card. No preview means a text-only card.

No code change is needed beyond the entry in `src/data/articles.js`.
