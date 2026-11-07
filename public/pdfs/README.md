# Article PDFs

Put the PDF copies of your articles in this folder. They are offered on the Article Downloads page (`/downloads`).

File names must match the `file` values in `articleDownloads` in `src/data/content.js`:

- `what-is-a-vpn.pdf`
- `proxy-vs-vpn.pdf`
- `ip-address-what-it-is-how-it-works.pdf`
- `i-was-called-aspiring-then-i-realized.pdf`
- `firewall-how-it-works-and-protects-you.pdf`
- `dns-how-your-device-finds-a-website-on-the-internet.pdf`
- `my-100-days-in-tech.pdf`

How it works: when the site is built (`npm run build`, or refreshed in `npm run dev`), each article card shows **Download PDF** if its file exists in this folder, and **PDF coming soon** if it does not. No code change is needed when you add a PDF. Drop the file in, then rebuild or push.

To add a new article: add an entry to `articleDownloads` in `src/data/content.js` and put its PDF here with the same file name.
