// ─────────────────────────────────────────────
// ARTICLE DOWNLOADS — the catalog behind the /downloads page
// (opened in a new tab from the Writing page)
//
// HOW TO ADD AN ARTICLE
//   1. Put its PDF in public/pdfs/
//   2. Add one entry to the list below. Order does not matter: the page sorts newest first.
//   3. Optional: add a cover preview in public/pdfs/previews/ with the same name as the PDF
//      but ending in .webp (landscape image, about 640 px wide). Without it the card is text-only.
//
// FIELDS
//   title        Article title.
//   type         Category shown on the card and used by the filter buttons
//                (for example 'Technical Writing' or 'Personal Writing').
//                A new type automatically becomes a new filter button.
//   platform     Where it was published (label only).
//   description  One or two sentences.
//   date         Publication date as YYYY-MM-DD. Use the real date, or '' if unknown.
//   url          The original published article (the "Read online" link). '' if there is none.
//   file         PDF file name inside public/pdfs/. The page offers "Download PDF" only if the
//                file exists when the site is built; otherwise it shows "PDF coming soon".
//
// Never invent a date or a URL: leave it '' until you have the real one.
// Entries that also appear in `writings` or `olt.articles` (content.js) should keep the same title / url.
// ─────────────────────────────────────────────
export const articleDownloads = [
  {
    title: 'What An Ungrateful Human I Am',
    type: 'Personal Writing',
    platform: 'OFF_LIMIT TECH',
    description: 'A reflection on gratitude, expectations, social media growth and the danger of overlooking little achievements.',
    date: '2026-11-12',
    url: '',  // add the real link once you have it
    file: 'what-an-ungrateful-human-i-am.pdf',
  },
  {
    title: 'My 100 Days in Tech',
    type: 'Personal Writing',
    platform: 'Dev.to',
    description: 'A documentation of a 100-day learning journey through technology.',
    date: '2026-09-26',
    url: 'https://dev.to/off_limit001/a-100-day-learning-journeymy-100-days-in-tech-june-18-2026-september-25-2026-100-days-4mh1',
    file: 'my-100-days-in-tech.pdf',
  },
  {
    title: 'DNS: How Your Device Finds a Website on the Internet',
    type: 'Technical Writing',
    platform: 'OFF_LIMIT TECH · Dev.to',
    description: 'A beginner-friendly explanation of how DNS helps your device find websites on the internet.',
    date: '2026-08-31',
    url: 'https://dev.to/off_limit001/dns-explained-how-your-device-finds-a-website-on-the-internet-4p0a',
    file: 'dns-how-your-device-finds-a-website-on-the-internet.pdf',
  },
  {
    title: 'Firewall: How It Works & Protects You',
    type: 'Technical Writing',
    platform: 'OFF_LIMIT TECH · Dev.to',
    description: 'A practical explanation of what a firewall is, how it works, and why it matters for your digital security.',
    date: '2026-08-23',
    url: 'https://dev.to/off_limit001/firewall-how-it-works-how-it-protects-you-36bi',
    file: 'firewall-how-it-works-and-protects-you.pdf',
  },
  {
    title: 'I Was Called Aspiring, Then I Realized…',
    type: 'Personal Writing',
    platform: 'Substack',
    description: 'A personal reflection on moving from simply aspiring to becoming an active learner and builder.',
    date: '2026-08-22',
    url: 'https://offlimit.substack.com/p/i-was-called-aspiring-then-i-realized?utm_source=share&utm_medium=android&r=6ldiuj',
    file: 'i-was-called-aspiring-then-i-realized.pdf',
  },
  {
    title: 'IP Address: What It Is, How It Works & What It Reveals About You',
    type: 'Technical Writing',
    platform: 'OFF_LIMIT TECH · Dev.to',
    description: 'What an IP address is, how IPv4 and IPv6 work, public vs. private addresses, and what an IP address can and cannot reveal about you.',
    date: '2026-08-16',
    url: 'https://dev.to/off_limit001/ip-address-what-it-is-how-it-works-what-it-reveals-about-you-1nf0',
    file: 'ip-address-what-it-is-how-it-works.pdf',
  },
  {
    title: 'Proxy vs. VPN: A Beginner & Developer Guide to Online Routing',
    type: 'Technical Writing',
    platform: 'OFF_LIMIT TECH · Dev.to',
    description: 'A beginner and developer guide to how VPNs and proxies route traffic, how they differ, and when to use each.',
    date: '2026-08-09',
    url: 'https://dev.to/off_limit001/proxy-vs-vpn-a-beginner-developer-guide-to-online-routing-29k0',
    file: 'proxy-vs-vpn.pdf',
  },
  {
    title: "What Is a VPN? A Beginner's Guide to Online Privacy",
    type: 'Technical Writing',
    platform: 'OFF_LIMIT TECH · Dev.to',
    description: 'A beginner-friendly guide to what a VPN is, how it works, why people use one, its limitations, and best practices.',
    date: '2026-07-31',
    url: 'https://dev.to/off_limit001/what-is-a-vpn-a-beginners-guide-to-online-privacy-4098',
    file: 'what-is-a-vpn.pdf',
  },
];
