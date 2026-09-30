import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/constants";
import { personal } from "@/data/personal";
import { Providers } from "@/components/shared/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${personal.name} | Software Engineer | Backend & Full-Stack Developer`;
const description =
  "Portfolio of Yenugula Surya Naga Sivaram, a software engineer with experience in Java, Spring Boot, Python, full-stack development, enterprise application modernization, SQL, APIs, and AI/ML.";

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: title,
    template: `%s | ${personal.shortName}`,
  },
  description,
  keywords: [
    "Yenugula Surya Naga Sivaram",
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "Python",
    "REST APIs",
    "AI/ML",
    "Portfolio",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: config.siteUrl,
    title,
    description,
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: personal.name,
        jobTitle: "Software Engineer",
        email: `mailto:${config.email}`,
        url: config.siteUrl,
        sameAs: [config.github, config.linkedin],
        alumniOf: "QIS College of Engineering and Technology",
      },
      {
        "@type": "WebSite",
        name: personal.name,
        url: config.siteUrl,
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
