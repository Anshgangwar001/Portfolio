import project1 from "../assets/projects/lms.jpg";
import project2 from "../assets/projects/movie.jpg";
import project3 from "../assets/projects/classroom.jpg";
import project4 from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `Final-year B.Tech (CSE) student at JIIT Noida with a passion for building scalable, user-centric web applications. I have hands-on experience in developing responsive UIs and full-stack applications using React.js, Node.js, Express, and MongoDB (MERN stack).
I'm currently seeking frontend or full-stack web development roles where I can contribute to impactful user experiences and grow alongside industry professionals. I bring a solid foundation in DSA, problem solving, and real-world coding practices, along with a strong willingness to learn and adapt..`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Learning Management System (LMS)",
    image: project1,
    description:
      "A full-stack LMS with role-based access (Admin, Instructor, Student), Stripe integration, analytics dashboard, and advanced authentication (JWT, MFA). Improved course navigation and decision-making with data visualization.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT"],
  },
  {
    title: "ShowXperience: Movie Ticket Booking App",
    image: project2,
    description:
      "A MERN stack platform for booking movie tickets with interfaces for users, admins, and theatre owners. Integrated Stripe for payments and implemented Redux Toolkit for optimized state management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Redux"],
  },
  {
    title: "Code Catalyst: Code Evaluation Platform",
    image: project3,
    description:
      "Developed a platform for automating coding assignments and grading. Enabled assignment creation, test case-based grading, real-time feedback, and ensured a standardized coding environment.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A responsive portfolio website to showcase personal projects, skills, and contact info, built using React and modern design practices.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
];


export const CONTACT = {
  address: "Sector 104 , Noida",
  phoneNo: "+91-8171832295",
  email: "anshgangwar817@gmail.com",
};
