export const personalInfo = {
  name: "Guillermo Pérez",
  location: "Villa Clara, Cuba 🇨🇺",
  email: "luisguillermo.rodriguez32@gmail.com",
  github: "https://github.com/GuillermoPerez32/",
  linkedin: "https://www.linkedin.com/in/guilleperez32/",
};

export const workExperience = [
  {
    company: "VIQ Systems",
    location: "Remote",
    position: "Lead Frontend Developer",
    period: "Mar 2025 - Present",
    achievements: [
      "Led the architectural design and development of the company's frontend stack.",
      "Currently developing a web-based enterprise instant messaging application.",
      "Collaborated closely with UX/UI designers to create consistent and accessible interfaces.",
      "Implemented scalable component patterns and enforced frontend best practices across the team.",
      "Reviewed code and mentored junior developers to ensure high code quality and maintainability.",
    ],
  },
  {
    company: "Mauer Principles Inc.",
    location: "Remote",
    position: "Frontend Developer",
    period: "Apr 2023 - Feb 2025",
    achievements: [
      "Developed scalable and optimized websites for different clients.",
      "Created a component library based on Material UI and another using Chakra UI.",
      "Documented components with Storybook to ensure consistency across all company sites.",
      "Built an internal operations automation site.",
      "Developed several websites for an international electric services company.",
    ],
  },
  {
    company: "GoDjango LLC",
    location: "Remote",
    position: "Full Stack Developer",
    period: "Oct 2022 - Mar 2023",
    achievements: [
      "Developed fullstack web applications using Django for backend and React for frontend.",
      "Created responsive and user-friendly interfaces with React and Flutter.",
      "Built and maintained RESTful APIs with Django to support dynamic frontend applications.",
      "Collaborated with cross-functional teams to deliver scalable and efficient web solutions.",
    ],
  },
  {
    company: "Animal Welfare in Cuba (BAC)",
    location: "Cuba",
    position: "Full Stack Developer",
    period: "Jan 2020 - Feb 2022",
    achievements: [
      "Developed and maintained Cuba's first and only animal welfare application during its active period.",
      "Built and maintained the backend using Django and PostgreSQL.",
      "Created the mobile frontend using Flutter to provide an accessible experience across devices.",
      "Enabled users to report animal abuse cases, view nearby veterinarians, and adopt pets through an intuitive platform.",
      "Scaled the application to support over 40,000 active users with high reliability and uptime.",
    ],
  },
];

export const education = [
  {
    institution: "University of Informatics Sciences (UCI)",
    location: "Havana, Cuba",
    degree: "Bachelor's in Computer Science Engineering",
    period: "2015 - 2020",
    achievements: [
      "Participated in programming contests (ACM-ICPC).",
      "Collaborated on web and mobile development projects.",
    ],
  },
];

export const skills = {
  programmingLanguages: ["TypeScript", "JavaScript", "Python", "C#", "Dart"],
  frontendDevelopment: [
    "React",
    "React Native",
    "Flutter",
    "Vue",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: [
    "Laravel",
    "Django",
    ".NET Core",
    "Node.js",
    "Express",
    "FastAPI",
  ],
  databaseAndStorage: ["PostgreSQL", "MySQL", "Firebase", "Prisma"],
  cloudAndDevOps: ["Docker", "Proxmox", "Firebase"],
  toolsAndServices: ["Git", "Storybook", "Vitest", "Zustand", "Redux", "Jira"],
};

export const projects: {
  title: string;
  description: string[];
  github?: string;
  demo?: string;
}[] = [
  {
    title: "PrimeVIP",
    description: [
      "A luxury transportation booking platform, including buses and limousines, that allows users to easily make reservations.",
      "Developed with React+Vite for the web frontend and Laravel for the backend.",
    ],
    demo: "https://primevip.guilleperez.com",
    github: "https://github.com/GuillermoPerez32/prime-vip",
  },
  {
    title: "Chatrium",
    description: [
      "A real-time enterprise instant messaging application built for internal communications.",
      "Developed with React for the frontend, and Node.js with WebSocket for real-time communication.",
      "Includes features like direct messaging, group chats, notifications, and file sharing.",
    ],
    github: "https://github.com/GuillermoPerez32/chatrium",
  },
  {
    title: "Pádel Court Booking System",
    description: [
      "A mobile-friendly platform for booking pádel courts in real-time. Developed with React Native for the frontend and Laravel for the backend.",
      "Includes features for managing schedules, court availability, and user reservations.",
    ],
  },
  {
    title: "BACuba Official Mobile App",
    description: [
      "The official application of the non-profit non-governmental organization BAC, for animal care in Cuba. Allows users to make pet reports, find veterinarians, and facilitate adoptions.",
      "Built with Django for backend, PostgreSQL for database management, and REST APIs for communication.",
    ],
  },
  {
    title: "Picsribalt",
    description: [
      "Designed and developed a visually appealing portfolio website for a professional photographer, showcasing her work and enhancing her online presence.",
      "Utilized Next.js, Tailwind CSS, and TypeScript to create an intuitive user interface and ensure responsive design across devices.",
      "Implemented SEO best practices to improve visibility and attract potential clients, resulting in increased engagement and inquiries.",
    ],

    demo: "https://picsribalt.guilleperez.com",
  },
  {
    title: "KitCar Wash",
    description: [
      "Developed a mobile application using React Native for seamlessly booking car wash services in Spain.",
      "The app integrates a RESTful API for real-time data retrieval and service availability, ensuring a smooth user experience.",
      "Implemented robust testing strategies to maintain code quality and performance, delivering a reliable solution that enhances the booking process for users.",
    ],
  },
];

export const awards = [];
