// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  content: {
    client: string;
    role: string;
    challenge: string;
    solution: string;
  };
}

export const projects: Project[] = [
  {
    slug: "aesthetech-clinic",
    title: "Aesthetech",
    year: "2026",
    category: "Medical Aesthetics / Premium Web",
    image: "https://res.cloudinary.com/doiaj5zz1/image/upload/v1772265991/aesthetech.netlify.app__sotfoj.png",
    description: "A premium digital sanctuary for medical aesthetic clinics where science meets artistry in a harmonious digital experience.",
    technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
    content: {
      client: "Aesthetech Medical Group",
      role: "Lead Frontend Developer",
      challenge: "Translating a high-end luxury brand identity into a high-performance web interface while ensuring a seamless medical booking integration.",
      solution: "Leveraging Next.js for Server-Side Rendering to optimize medical SEO, combined with a 'Luxury Minimalist' design and fluid motion interactions."
    }
  },
  {
    slug: "lovina-ocean",
    title: "Lovina Ocean",
    year: "2026",
    category: "Travel & Booking Architecture",
    image: "https://res.cloudinary.com/doiaj5zz1/image/upload/v1772265991/www.lovinaoceandolphintour.com__lrczuo.png",
    description: "A high-performance booking sanctuary for North Bali's premier dolphin experience. Focusing on ethical tourism through minimalist digital interaction.",
    technologies: ["Next.js", "Tailwind CSS", "Clerk Auth", "Cloudinary"],
    content: {
      client: "Lovina Ocean Dolphin Tour",
      role: "Full-stack Developer & Digital Architect",
      challenge: "Providing an intuitive and efficient booking journey for global travelers without compromising visual elegance or performance.",
      solution: "Implemented Next.js for advanced SEO and caching strategies, integrated with Cloudinary for seamless high-resolution media management."
    }
  },
  {
    slug: "wajah-plastik",
    title: "Wajah Plastik",
    year: "2024",
    category: "Socio-Technopreneurship / Creative Art",
    image: "https://res.cloudinary.com/doiaj5zz1/image/upload/v1772268138/Screenshot_2026-02-28_164128_wciwsg.png",
    description: "Transforming plastic waste into high-value portrait art through the synergy of pop-art graphic design and the 6R environmental philosophy.",
    technologies: ["Alpine.js", "Tailwind CSS", "AOS.js", "PHP"],
    content: {
      client: "Made Agus Janardana (Made Oplas)",
      role: "Digital Architect & Web Consultant",
      challenge: "Presenting complex environmental education narratives into an aesthetic, lightweight, and accessible interface for a diverse audience.",
      solution: "Developed a thematic gallery system with high-performance optimization using Alpine.js, ensuring an immersive visual experience without script overhead."
    }
  },
  {
    slug: "lovina-dolphin-watching",
    title: "Lovina Dolphin Watching",
    year: "2024",
    category: "CMS Development & SEO Optimization",
    image: "https://res.cloudinary.com/doiaj5zz1/image/upload/v1772266002/lovinadolphinwatching.com__qtr1f9.png",
    description: "Optimizing a CMS-based tourism platform to reach a global audience through robust SEO structure and performance tuning.",
    technologies: ["WordPress", "Astra", "Google Analytics", "Schema Markup"],
    content: {
      client: "Lovina Dolphin Watching Service",
      role: "SEO Specialist & Web Developer",
      challenge: "Increasing service visibility on global search engines while maintaining an easy-to-manage content workflow for daily operations.",
      solution: "Integration of Google Tag Manager and Schema.org (JSON-LD) optimization to significantly improve CTR and search engine presence."
    }
  },
];