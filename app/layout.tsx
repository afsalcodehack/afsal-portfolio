import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Mohammed Afsal",
    "Lead Software Engineer",
    "Agentic AI",
    "LangGraph",
    "RAG",
    "Azure OpenAI",
    "Next.js",
    ".NET",
    "Full Stack Engineer",
    "Qatar",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.title}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.description,
  url: site.url,
  image: `${site.url}/profile.jpg`,
  sameAs: [site.linkedin, site.github],
  worksFor: {
    "@type": "Organization",
    name: "Borncode Qatar",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "AIMIT",
  },
  knowsAbout: [
    "Agentic AI",
    "LangGraph",
    "Retrieval-Augmented Generation",
    "Azure OpenAI",
    "React",
    "Next.js",
    "TypeScript",
    ".NET Core",
    "Python",
    "PostgreSQL",
    "Kubernetes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
