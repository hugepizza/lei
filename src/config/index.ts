import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lei — Full Stack Web Developer",
  author: "Leilei Wang",
  description:
    "Software Engineer based in Leshan, China and Dasmarinas, Philippines. I specialize in full stack web application development and maintenance.",
  lang: "en",
  siteLogo: "/lei-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/hugepizza" },
    { text: "LinkedIn", href: "https://linkedin.com/in/leilei-wang-3b89b4184" }
  ],
  socialImage: "/lei-og.png",
  canonicalURL: "https://leidev.site",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Leilei Wang",
    specialty: "Full Stack Web Developer",
    summary:
      "Developer based in Leshan, China and Dasmarinas, Philippines. I specialize in full stack web application development and maintenance.",
    email: "wangleilei950325@gmail.com",
  },
  experience: [
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      startDate: "Nov 2022",
      endDate: "Present",
      summary: [
        "Collaborated with client teams to design solutions and deliver user-centric projects on time and within budget.",
        "Responsible for frontend and backend development, ensuring seamless integration, performance optimization, and improved user experience.",
        "Managed end-to-end deployment, including CI/CD pipeline setup, and production releases.",
        "Leveraged modern technologies including React, Next.js, Node.js, and Prisma, augmented with Vercel AI Kit, LangChain, and Dify to rapidly develop reusable AI-powered application modules.",
      ],
    },
    {
      company: "Chenlong Shanghai Information Technology Co., Ltd",
      position: "Backend Software Engineer",
      startDate: "Nov 2021",
      endDate: "Oct 2022",
      summary: [
        "Developed and optimized core backend functionalities for UKI(a social media app) serving 1M+ MAU.",
        "Implemented key business features including Online Real-time features and data processing systems.",
      ],
    },
    {
      company: "Shanghai Shuoye Co., Ltd",
      position: "Backend Software Engineer",
      startDate: "Apr 2020",
      endDate: "Nov 2021",
      summary: [
        "Worked on projects such as a virtual service trading web app and a game streamer data analysis system.",
        "Led architectural research, task allocation, core functionality development, data crawler creation, and cloud-based big data integration.",
        "Played a key role in developing a robust Kubernetes-based system with over ten microservices.",
      ],
    },
    {
      company: "Xi'An Fanxiang Co., Ltd",
      position: "Backend Software Engineer",
      startDate: "Jul 2018",
      endDate: "Apr 2020",
      summary: [
        "Developed an Integrated Apartment Management Platform, integrating smart device data and designing a smart surveillance system with Raspberry Pi.",
        "Enhanced system efficiency by synchronizing smart device data with supplier APIs and storing it in a time-series database.",
      ],
    },
  ],
  projects: [
    {
      name: "Celpip Master",
      summary: `An AI-powered CELPIP exam simulator (Next.js/Hono) with 16+ authentic question types, achieving 100% UI parity across all test sections.`,
      linkVisit: "https://celpipmaster.com",
      linkVideo: "https://assets.leidev.site/celpipmaster.mp4",
      image: "/celpipmaster.png",
    },
    {
      name: "Easy Interview",
      summary: `An application designed to automate recruitment processes, simplifying interview management, candidate
screening, and interview scheduling.`,
      linkVisit: "https://easyinterview.ai",
      image: "/easyinterview.png",
    },
    {
      name: "TCF Go",
      summary: "An AI-powered TCF French Language Level exam simulator.",
      linkVisit: "https://tcfgo.com",
      linkVideo: "https://assets.leidev.site/tcfgo.mp4",
      image: "/tcf.png",
    },
    {
      name: "Saki Talent",
      summary: "A web app that helps international students choose universities and provides a simulated video interview question bank and online interview platform tailored to different schools.",
      linkVisit: "https://mytalent.ai/programs",
      linkVideo: "https://assets.leidev.site/saki.mp4",
      image: "/saki.png",
    },
    {
      name: "Anda Law",
      summary: "A website for a Canadian immigration consultancy agency that includes real-time visa reference data from the Canadian Immigration Office.",
      linkVisit: "https://anda.law",
      image: "/anda.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Leilei Wang, a Full Stack Web Developer with 7+ years of experience building scalable applications and AI-powered solutions. Based in Leshan, China and Dasmarinas, Philippines.

      I specialize in modern web technologies including React, Next.js, Node.js, and AI integration. My experience ranges from developing social media platforms serving 1M+ users to creating innovative AI-powered tools like Celpip Master and Easy Interview.

      I'm passionate about delivering end-to-end solutions that combine technical excellence with user-centric design, whether it's building robust backend systems or crafting intuitive frontend interfaces.
    `,
    image: "/lei-big.png",
  },
};

// #5755ff
