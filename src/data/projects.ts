export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  additionalImages?: string[];
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  year: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Event Management",
    category: "Web App / UI/UX Design",
    description: "Designing a web-based event management system for DPMPTSP, from user flows to high-fidelity prototypes.",
    image: "Public/Assets/Images/Projects/EventManagementCover.png",
    additionalImages: [
      "Public/Assets/Images/Projects/EventManagement/Dashboard.png",
      "Public/Assets/Images/Projects/EventManagement/Homepage2.png",
   ],
    fullDescription:
      "An academic project focused on designing a comprehensive event management system. The system was designed to handle participant registration, QR code-based check-in, and provide real-time attendance tracking.",
    challenge:
      "Designing a single platform to serve two very different user flows (event administrators and attendees) with unique needs, while also ensuring the on-site check-in process was fast and efficient to prevent queuing.",
    solution:
      "I conducted an in-depth user flow analysis to map out every scenario. Based on this analysis, I developed an interactive high-fidelity prototype in Figma that prioritized ease of navigation and clarity of information for both the admin dashboard and the attendee interface.",
    results: [
      "Delivered a high-fidelity prototype ready for developer hand-off.", 
      "Designed an efficient and intuitive QR code-based registration and check-in module.",
      "Outlined an attendance tracking system designed for real-time monitoring.", 
    ],
    tools: ["Figma"],
    year: "2024",
    link: "https://www.figma.com/design/uG3bbtOOW9QeGpTyJr88iJ/Event-Management?node-id=60-36&t=OgKvv1JXLiub9T5T-1",
  },
  {
    id: 2,
    title: "Periodic Salary Increase Application",
    category: "Web App / UI/UX & Front-End",
    description: "Developed the UI/UX and front-end implementation for automating the periodic salary increase process at DPMPTSP West Java.",
    image:       "Public/Assets/Images/Projects/KGBCover.png",
    additionalImages: [
      "Public/Assets/Images/Projects/KGB/Dashboard.png",
      "Public/Assets/Images/Projects/KGB/Staff2.png",
          ],
    fullDescription:
      "As part of an internship program, I directly contributed to developing a web application to manage and automate the periodic salary increase process for civil servants. I was responsible for both UI/UX design and front-end development.",
    challenge:
      "The existing bureaucratic process was manual, time-consuming, and prone to errors. The challenge was to translate these complex business requirements from stakeholder interviews into a digital interface that was clear, functional, and easy for internal staff to use.",
    solution:
      "I was involved in the full cycle: from conducting stakeholder interviews to understand needs, translating them into wireframes and user flows, and implementing the designs into front-end code. I also performed iterative prototyping, gathered user feedback, and refined workflows to ensure maximum usability.",
    results: [
      "Successfully developed and implemented a functional user interface for the automation system.", 
      "Improved system clarity and usability through multiple cycles of feedback and design iteration.", 
      "Collaborated effectively with cross-functional teams to ensure alignment between design and technical functionality.",
    ],
    tools: ["Figma", "React", "", ""],
    year: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "KeuRTa - Neighborhood Budgeting App",
    category: "Web App / UI/UX & Front-End",
    description: "Designed and built a community-focused web app for transparent neighborhood (RT/RW) financial management.",
    image:       "Public/Assets/Images/Projects/KeurtaCover.png",
    additionalImages: [
      "Public/Assets/Images/Projects/Keurta/Dashboard.png",
      "Public/Assets/Images/Projects/Keurta/Transaksi.png",
    
    ],
    fullDescription:
      "KeuRTa was an academic project aimed at empowering neighborhoods (RT/RW) with a digital tool for financial management. The web-based app was designed to increase transparency and simplify budget tracking for community administrators.",
    challenge:
      "Financial management at the neighborhood level is often manual and lacks transparency. The challenge was to create a web-based tool that was extremely easy to use, even for non-technical users, while remaining accurate and informative for all residents.",
    solution:
      "I designed wireframes and implemented front-end components with a primary focus on user-centered design principles. Priority was given to an intuitive dashboard design that presented financial data clearly and transparently, making it easy for administrators and residents to understand at a glance.",
    results: [
      "Produced an intuitive and transparent dashboard design for financial reporting.", //
      "Implemented functional front-end components based on user-centered design principles.", //
      "Created an application concept that prioritized ease of use for community financial management.",
    ],
    tools: ["Figma", "Protopie", "Illustrator", "Optimal Workshop"],
    year: "2024",
    link: "#",
  },
  {
    id: 4,
    title: "Try It! - Cooking Recipe Application",
    category: "Mobile App / UI/UX Design",
    description: "Designed an interactive, mobile-first application for users to share, save, and browse cooking recipes.",
    image:       "Public/Assets/Images/Projects/TryItCover.png",
    additionalImages: [
      "Public/Assets/Images/Projects/TryIt/Home.png",
      "Public/Assets/Images/Projects/TryIt/.png",
    ],
    fullDescription:
      "This academic project focused purely on the UI/UX design for a cooking recipe app. The goal was to create a visually engaging and easy-to-use mobile-first platform where users could not only find recipes but also contribute by submitting their own.",
    challenge:
      "The recipe app market is saturated. The challenge was to design an interface that was not only functional for browsing and filtering, but also built a sense of community by encouraging user interaction (like reviews and recipe submissions).",
    solution:
      "I designed a set of interactive components to support key features like search, category filtering, user reviews, and recipe submissions. A strong focus was placed on accessible visual design and responsive layouts [cite: 86], ensuring a seamless mobile-first experience.",
    results: [
     "Produced a complete and cohesive mobile-first application design.",
      "Built interactive components to support search, filtering, and review features.",
      "Applied a strong focus on accessible visual design and responsive layouts.",
    ],
    tools: ["Figma",],
    year: "2023",
    link: "#",
  },
  {
    id: 5,
    title: "Case Study: Viu App Redesign",
    category: "UI/UX Redesign / Case Study",
    description: "Analyzed and redesigned the Viu app concept to improve content discoverability and visual consistency.",
    image:       "Public/Assets/Images/Projects/RedesignViuCover.png",
    additionalImages: [
      "Public/Assets/Images/Projects/",
      "Public/Assets/Images/Projects/",
    ],
    fullDescription:
      "This was an academic case study project aimed at identifying usability issues in the existing Viu app  and proposing an improved design solution. The process involved user research and heuristic evaluation.",
    challenge:
      "Based on initial research, users struggled with content discoverability and felt the app's navigation was inconsistent. The challenge was to restructure the information flow without altering the core identity of the Viu app.",
    solution:
      "I conducted a heuristic evaluation and usability research to identify key user pain points. Based on these findings, I created a redesign concept in Figma that focused on an improved navigation structure and visual hierarchy for better user interaction[cite: 90].",
    results: [
      "Identified key usability issues through heuristic evaluation.", //
      "Created a high-fidelity redesign concept in Figma.", //
      "Presented a prototype with an improved navigation structure and visual consistency.",
    ],
    tools: ["Figma", "Sketch", "InVision", "Hotjar"],
    year: "2023",
    link: "#",
  },
];
