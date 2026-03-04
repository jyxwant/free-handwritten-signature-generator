const fs = require('fs');

// Color map for SVG icons
const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', stroke: '#2563EB' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', stroke: '#6366F1' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', stroke: '#D97706' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', stroke: '#0D9488' },
  green: { bg: 'bg-green-50', text: 'text-green-700', stroke: '#16A34A' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', stroke: '#9333EA' },
  red: { bg: 'bg-red-50', text: 'text-red-700', stroke: '#DC2626' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', stroke: '#475569' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', stroke: '#EA580C' },
  violet: { bg: 'bg-purple-50', text: 'text-purple-700', stroke: '#7C3AED' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', stroke: '#E11D48' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-700', stroke: '#DB2777' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-700', stroke: '#0284C7' },
};

const articles = [
  { slug: 'what-is-an-electronic-signature', title: 'What Is an Electronic Signature?', desc: 'Learn what an e-signature is, how it works, the different types, and whether it is legally binding.', color: 'blue' },
  { slug: 'what-is-a-digital-signature', title: 'What Is a Digital Signature?', desc: 'Understand what a digital signature is, how cryptographic verification works, and when you need one.', color: 'indigo' },
  { slug: 'what-is-a-wet-signature', title: 'What Is a Wet Signature?', desc: 'Learn what a wet signature is, why it is called wet, when you still need one, and how electronic alternatives compare.', color: 'amber' },
  { slug: 'what-is-a-signature-block', title: 'What Is a Signature Block?', desc: 'Learn what a signature block is, what to include, and how to format it for letters, contracts, and emails.', color: 'teal' },
  { slug: 'what-is-a-digital-certificate', title: 'What Is a Digital Certificate?', desc: 'Learn what a digital certificate is, how it verifies identity online, and its role in digital signatures and HTTPS.', color: 'green' },
  { slug: 'what-is-pki', title: 'What Is PKI (Public Key Infrastructure)?', desc: 'Learn what PKI is, how public and private keys work together, and why it matters for secure communication.', color: 'purple' },
  { slug: 'what-is-the-esign-act', title: 'What Is the ESIGN Act?', desc: 'Learn what the ESIGN Act is, what it covers, and how it makes electronic signatures legally binding in the US.', color: 'red' },
  { slug: 'what-is-eidas', title: 'What Is eIDAS?', desc: 'Learn what eIDAS is, how it regulates electronic signatures in the EU, and the three signature levels.', color: 'blue' },
  { slug: 'what-is-a-signature-line', title: 'What Is a Signature Line?', desc: 'Learn what a signature line is, how to add one in Word, PDF, and Google Docs, and formatting best practices.', color: 'slate' },
  { slug: 'what-is-a-notarized-signature', title: 'What Is a Notarized Signature?', desc: 'Learn what a notarized signature is, how notarization works, when it is required, and remote notarization options.', color: 'orange' },
  { slug: 'what-is-an-electronic-seal', title: 'What Is an Electronic Seal (eSeal)?', desc: 'Learn what an electronic seal is, how it differs from an electronic signature, and when businesses use eSeals.', color: 'violet' },
  { slug: 'what-is-a-signature-stamp', title: 'What Is a Signature Stamp?', desc: 'Learn what a signature stamp is, when it is legally valid, the risks, and how digital tools offer a better alternative.', color: 'rose' },
  { slug: 'what-is-a-signature-font', title: 'What Is a Signature Font?', desc: 'Learn what a signature font is, the different types, best picks, and how to use one for a professional typed signature.', color: 'pink' },
  { slug: 'what-is-an-ink-signature', title: 'What Is an Ink Signature?', desc: 'Learn what an ink signature is, which ink colors are accepted for legal documents, and digital alternatives.', color: 'sky' },
];

// Book/definition icon SVG
const defIcon = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="COLOR" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>`;

function makeCard(a) {
  const c = colorMap[a.color] || colorMap.blue;
  const icon = defIcon.replace('COLOR', c.stroke);
  return `
                <!-- Blog Post Card: ${a.title} -->
                <article class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                    <div class="h-48 ${c.bg} flex items-center justify-center">
                        ${icon}
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="px-2 py-1 ${c.bg} ${c.text} text-xs font-semibold rounded-full uppercase tracking-wide">Definition</span>
                            <span class="text-slate-400 text-xs">Mar 2026</span>
                        </div>
                        <h2 class="text-xl font-bold text-slate-900 mb-2">
                            <a href="blog/${a.slug}.html" class="hover:text-blue-600 transition-colors">${a.title}</a>
                        </h2>
                        <p class="text-slate-500 text-sm mb-4 flex-1">
                            ${a.desc}
                        </p>
                        <a href="blog/${a.slug}.html" class="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
                            Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </article>`;
}

// 1. Update blog.html - insert cards before the closing </div> of the grid
let blogHtml = fs.readFileSync('blog.html', 'utf8');
const insertMarker = `<!-- Blog Post Card 2: How to Insert Signature in Google Docs -->`;
const cardsHtml = articles.map(makeCard).join('\n');
blogHtml = blogHtml.replace(insertMarker, cardsHtml + '\n\n                ' + insertMarker);
fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('Updated blog.html with 14 new cards');

// 2. Update sitemap.xml - add entries before </urlset>
let sitemap = fs.readFileSync('sitemap.xml', 'utf8');

// Update blog.html lastmod to 2026-03-02
sitemap = sitemap.replace(
  /<loc>https:\/\/signaturesketch\.tech\/blog\.html<\/loc>\s*<lastmod>[\d-]+<\/lastmod>/,
  '<loc>https://signaturesketch.tech/blog.html</loc>\n    <lastmod>2026-03-04</lastmod>'
);

const sitemapEntries = articles.map(a => `
  <!-- Blog Article: ${a.title} -->
  <url>
    <loc>https://signaturesketch.tech/blog/${a.slug}.html</loc>
    <lastmod>2026-03-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://signaturesketch.tech/blog/${a.slug}.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://signaturesketch.tech/blog/${a.slug}.html"/>
  </url>`).join('\n');

sitemap = sitemap.replace('</urlset>', sitemapEntries + '\n</urlset>');
fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('Updated sitemap.xml with 14 new entries');
console.log('Done!');
