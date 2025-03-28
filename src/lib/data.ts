export type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Publications", href: "#publications" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
];

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  highlightedAuthor: string;
  description: string;
  imageUrl: string;
  links?: {
    label: string;
    url: string;
  }[];
};

export const publications: Publication[] = [
  {
    id: "opioid-safety",
    title: "An Implantable System for Opioid Safety Device",
    authors: [
      "Hen-Wei Huang",
      "Peter R. Chai",
      "...",
      "Alexander Alexiev",
      "Giovanni Traverso",
    ],
    highlightedAuthor: "Alexander Alexiev",
    description: "100517",
    imageUrl:
      "https://placehold.co/200x150/e2e8f0/1e293b?text=Opioid+Safety+Device",
    links: [
      { label: "Paper", url: "#" },
      { label: "Press", url: "#" },
    ],
  },
  {
    id: "ischemia-detection",
    title:
      "Ingestible Light-Reflectance Sensing Capsule for Automated Ischemia Detection",
    authors: ["Alexander Alexiev", "Jack Chen", "Giovanni Traverso"],
    highlightedAuthor: "Alexander Alexiev",
    description: "Under Review at Science Robotics",
    imageUrl:
      "https://placehold.co/200x150/e2e8f0/1e293b?text=Ischemia+Detection",
  },
  {
    id: "microactuator",
    title:
      "Electrically-Triggered Microactuator Powered by Aluminum-Nickel Nanofilm",
    authors: ["Alexander Alexiev", "Jack Chen", "Giovanni Traverso"],
    highlightedAuthor: "Alexander Alexiev",
    description: "U.S. Provisional Patent",
    imageUrl: "https://placehold.co/200x150/e2e8f0/1e293b?text=Microactuator",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  links?: {
    label: string;
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "robot-vision",
    title: "Robot Vision and Learning",
    description:
      "Research project focused on developing computer vision algorithms for robotic systems to better perceive and interact with their environment.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Robot+Vision",
    technologies: ["Python", "PyTorch", "ROS", "Computer Vision"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Demo", url: "#" },
    ],
  },
  {
    id: "biomedical-robotics",
    title: "Biomedical Robotics Research",
    description:
      "Developed novel robotic systems for medical applications at MIT, focusing on minimally invasive surgical techniques.",
    imageUrl:
      "https://placehold.co/600x400/e2e8f0/1e293b?text=Biomedical+Robotics",
    technologies: ["C++", "MATLAB", "CAD", "Embedded Systems"],
    links: [{ label: "Paper", url: "#" }],
  },
  {
    id: "ai-ml-project",
    title: "Machine Learning for Robotics",
    description:
      "Implementation of reinforcement learning algorithms for robotic control systems, enabling adaptive behavior in complex environments.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=ML+Robotics",
    technologies: [
      "Python",
      "TensorFlow",
      "Reinforcement Learning",
      "Robotics",
    ],
    links: [{ label: "GitHub", url: "#" }],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
};

export const experiences: Experience[] = [
  {
    id: "toronto-university",
    company: "University of Toronto",
    role: "Undergraduate Researcher",
    period: "2022 - Present",
    description: [
      "Conducting research at the Robot Vision and Learning group under the supervision of prof. Florian Shkurti.",
      "Developing computer vision algorithms for robotic systems to better perceive and interact with their environment.",
      "Implementing and testing novel approaches to robot learning and adaptation.",
    ],
    technologies: ["Python", "PyTorch", "ROS", "Computer Vision"],
    imageUrl: "https://placehold.co/80x80/e2e8f0/1e293b?text=UofT",
  },
  {
    id: "mit",
    company: "MIT",
    role: "Biomedical Robotics Researcher",
    period: "2021 - 2022",
    description: [
      "Worked as a Biomedical Robotics Researcher developing novel medical devices.",
      "Contributed to research on implantable and ingestible robotic systems.",
      "Collaborated with interdisciplinary teams of engineers, scientists, and medical professionals.",
    ],
    technologies: ["C++", "MATLAB", "CAD", "Embedded Systems"],
    imageUrl: "https://placehold.co/80x80/e2e8f0/1e293b?text=MIT",
  },
  {
    id: "electronic-arts",
    company: "Electronic Arts",
    role: "Machine Learning Intern",
    period: "2020 - 2021",
    description: [
      "Developed machine learning algorithms for game AI systems.",
      "Implemented reinforcement learning techniques to improve NPC behavior.",
      "Collaborated with game development teams to integrate AI solutions.",
    ],
    technologies: ["Python", "TensorFlow", "C++", "Game Development"],
    imageUrl: "https://placehold.co/80x80/e2e8f0/1e293b?text=EA",
  },
];

export const profileData = {
  name: "Alexander Alexiev",
  bio: [
    "I am an undergraduate student studying Engineering Science at the University of Toronto. I am pursuing a Major in Robotics with a Minor in Artificial Intelligence. Throughout my degree, I worked at Electronic Arts as a Machine Learning Intern, I worked at MIT as a Biomedical Robotics Researcher, and I am currently an undergraduate researcher at the Robot Vision and Learning group at the University of Toronto, supervised by prof. Florian Shkurti.",
    "My goal is to create robots that interact with the world as effortlessly as humans do. I aim to achieve this by conducting research at the intersection of computer vision, mechanical design, electrical engineering, and artificial intelligence.",
  ],
  imageUrl: "https://placehold.co/300x400/e2e8f0/1e293b?text=Alexander+Alexiev",
  contact: "alex.alexiev [at] mail (dot) utoronto (dot) ca",
  githubUrl: "https://github.com/alex-alexiev",
};
