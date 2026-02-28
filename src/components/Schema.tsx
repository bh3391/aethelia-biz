// src/components/SchemaOrg.tsx
export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Aethelia",
    "alternateName": "Aethelia Studio",
    "url": "https://www.aethelia.biz.id/",
    "logo": "https://www.aethelia.biz.id/logo.png", // Replace with your actual logo URL
    "image": "https://www.aethelia.biz.id/og-image.jpg",
    "description": "A digital sanctuary and minimalist web architecture studio by Bhakti Pratama. Specializing in high-performance Next.js development.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buleleng",
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "founder": {
      "@type": "Person",
      "name": "Bhakti Pratama",
      "jobTitle": "Digital Architect",
      "url": "https://www.aethelia.biz.id/about"
    },
    "sameAs": [
      "https://github.com/your-github-username",
      "https://linkedin.com/in/your-linkedin-username",
      "https://instagram.com/aethelia.studio"
    ],
    "priceRange": "$$$",
    "knowsAbout": [
      "Web Development",
      "Next.js",
      "Minimalist Design",
      "User Experience",
      "SEO Optimization"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}