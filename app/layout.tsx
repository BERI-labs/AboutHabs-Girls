import type { Metadata } from "next";
import "./globals.css";
import { SCHOOL_NAME } from "./lib/school-config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://beri-labs.github.io/AboutHabs-Girls";

export const metadata: Metadata = {
  title: `Beri | ${SCHOOL_NAME} AI Assistant`,
  description:
    "Beri is a student-built AI chatbot for Haberdashers\u2019 Girls\u2019 School. Ask about admissions, fees, curriculum, sport, and school life \u2014 powered by BERI\u2019s education AI framework.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `Beri | ${SCHOOL_NAME} AI Chatbot`,
    description:
      "Ask Beri anything about Haberdashers\u2019 Girls\u2019 School. A student-built AI education tool by BERI Labs \u2014 admissions, fees, curriculum, sport, and school life.",
    url: siteUrl,
    siteName: "Beri \u2014 BERI Labs",
    images: [
      {
        // TODO: Replace with actual Girls school logo once available in public/.
        url: `${siteUrl}/habs-girls-logo.png`,
        width: 512,
        height: 512,
        alt: "Beri \u2014 AI chatbot for Haberdashers\u2019 Girls\u2019 School, built by BERI Labs",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: `Beri | ${SCHOOL_NAME} AI Chatbot`,
    description:
      "Ask Beri anything about Haberdashers\u2019 Girls\u2019 School. A student-built AI chatbot by BERI Labs.",
    // TODO: Replace with actual Girls school logo once available.
    images: [`${siteUrl}/habs-girls-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // TODO: Replace with actual Girls school logo file once available in public/.
    icon: `${basePath}/habs-girls-logo.png`,
  },
};

// JSON-LD structured data for rich results and AI answer engines
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Beri",
      alternateName: "BERI Habs Girls Chatbot",
      description:
        "Beri is a student-built AI chatbot developed by BERI Labs as part of their education AI infrastructure. It uses retrieval-augmented generation (RAG) to answer questions about Haberdashers\u2019 Girls\u2019 School.",
      url: siteUrl,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Any",
      creator: {
        "@type": "Organization",
        name: "BERI Labs",
        url: "https://beri-labs.github.io/",
        description:
          "BERI is a student-led AI education framework that designs and builds bespoke AI tools for schools, including browser-based chatbots and education AI infrastructure.",
      },
      audience: {
        "@type": "EducationalAudience",
        educationalRole: ["student", "parent", "teacher"],
      },
      about: {
        "@type": "School",
        name: "Haberdashers\u2019 Girls\u2019 School",
        alternateName: "Habs Girls",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Elstree",
          addressRegion: "Hertfordshire",
          addressCountry: "GB",
        },
      },
      featureList: [
        "School admissions information",
        "School fees and bursaries",
        "Curriculum and A-level guidance",
        "School life and extracurricular activities",
        "Source-cited AI answers",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Beri?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beri is a student-built AI chatbot for Haberdashers\u2019 Girls\u2019 School, created by BERI Labs. It uses retrieval-augmented generation (RAG) to answer questions about admissions, fees, curriculum, sport, and school life \u2014 with cited sources from the school knowledge base.",
          },
        },
        {
          "@type": "Question",
          name: "What is BERI Labs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BERI Labs is a student-led AI education framework that builds bespoke AI tools for schools. Their work includes browser-based school chatbots, education AI infrastructure, and student-built AI tools designed to help pupils, parents, and teachers navigate school information.",
          },
        },
        {
          "@type": "Question",
          name: "What can Beri help me with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beri can answer questions about Haberdashers\u2019 Girls\u2019 School, including admissions deadlines, school fees and bursaries, GCSE and A-level subject choices, sports and extracurricular activities, and general school life. Each answer includes cited sources.",
          },
        },
        {
          "@type": "Question",
          name: "Is Beri an official Haberdashers\u2019 school tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beri is built by BERI Labs, a student-led AI education project, using publicly available school information. It is not an official school-operated service. Always verify important information directly with Haberdashers\u2019 Girls\u2019 School.",
          },
        },
        {
          "@type": "Question",
          name: "How does Beri work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beri uses a fully browser-based retrieval-augmented generation (RAG) pipeline. It runs hybrid search (BM25 keyword search plus semantic vector search) in a Web Worker to find relevant knowledge base passages, then generates a response via the Groq API \u2014 all without sending your question to an external server.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* theme-color uses the Girls primary coral */}
        <meta name="theme-color" content="#F57C64" />
        {/* TODO: Replace habs-girls-logo.png with the actual Girls school logo once available. */}
        <link rel="icon" href={`${basePath}/habs-girls-logo.png`} type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ background: "#ffffff", minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}
