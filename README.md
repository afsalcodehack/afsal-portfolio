# Mohammed Afsal — Portfolio

Personal profile site for **Mohammed Afsal**, Lead Software Engineer (Full Stack + Agentic AI).

**Live:** https://afsel.dev

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com)

## SEO

- Full Open Graph + Twitter card metadata with generated share image
- JSON-LD `Person` structured data
- Static `sitemap.xml` and `robots.txt`
- Semantic HTML, fully static pages

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # static export to ./out
npm run deploy   # build + deploy to Cloudflare Pages
```

## Content

All resume content lives in [`lib/data.ts`](lib/data.ts) — edit that single file to update
skills, experience, or contact details.

The profile photo is `public/profile.jpg`; the hero falls back to initials if it is absent.
