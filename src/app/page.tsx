import Navbar from "@/components/navbar";
import ProfileSection from "@/components/profile-section";
import PublicationsSection from "@/components/publications-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
// import Footer from "@/components/footer";
import Link from "next/link";

const profileData = {
  name: "Alexander Alexiev",
  bio: (
    <>
      <p>
        I am an undergraduate student studying{" "}
        <Link href="#" className="text-blue-700 hover:text-blue-900">
          Engineering Science
        </Link>{" "}
        at the{" "}
        <Link href="#" className="text-blue-700 hover:text-blue-900">
          University of Toronto
        </Link>
        . I am pursuing a Major in Robotics with a Minor in Artificial
        Intelligence. Throughout my degree, I worked at Electronic Arts as a
        Machine Learning Intern, I worked at MIT as a Biomedical Robotics
        Researcher, and I am currently an undergraduate researcher at the Robot
        Vision and Learning group at the University of Toronto, supervised by
        prof. Florian Shkurti.
      </p>
      <p className="mt-4">
        My goal is to create robots that interact with the world as effortlessly
        as humans do. I aim to achieve this by conducting research at the
        intersection of computer vision, mechanical design, electrical
        engineering, and artificial intelligence.
      </p>
    </>
  ),
  email: "alex.alexiev [at] mail (dot) utoronto (dot) ca",
  githubUsername: "alex-alexiev",
  // Using placeholder image
  imageUrl: "https://alex-alexiev.github.io/files/profile.jpg",
};

// Actual publications from alex-alexiev.github.io
const publications = [
  {
    title: "An Implantable System for Opioid Safety Device",
    authors: [
      { name: "Hen-Wei Huang" },
      { name: "Peter R. Chai" },
      { name: "Alexander Alexiev", isHighlighted: true },
      { name: "Giovanni Traverso" },
    ],
    description: "",
    imageUrl: "https://alex-alexiev.github.io/files/projects/isos.jpeg",
    paperUrl: "#",
    pressUrl: "#",
    journalInfo: "100517 [Paper] [Press]",
  },
  {
    title:
      "Ingestible Light-Reflectance Sensing Capsule for Automated Ischemia Detection",
    authors: [
      { name: "Alexander Alexiev", isHighlighted: true },
      { name: "Jack Chen" },
      { name: "Giovanni Traverso" },
    ],
    description: "",
    imageUrl: "https://alex-alexiev.github.io/files/projects/firefly.png",
    paperUrl: "#",
    journalInfo: "Under Review at Science Robotics",
  },
  {
    title:
      "Electrically-Triggered Microactuator Powered by Aluminum-Nickel Nanofilm",
    authors: [
      { name: "Alexander Alexiev", isHighlighted: true },
      { name: "Jack Chen" },
      { name: "Giovanni Traverso" },
    ],
    description: "",
    imageUrl: "https://alex-alexiev.github.io/files/projects/splash.png",
    paperUrl: "#",
    pressUrl: "#",
    journalInfo: "U.S. Provisional Patent",
  },
];

// Expanded projects section with more relevant projects
const projects = [
  {
    title: "Robot Vision and Learning Research",
    description:
      "Research focused on computer vision algorithms for robotic perception and learning at the University of Toronto. Working on enabling robots to better understand and interact with their environment through visual data.",
    imageUrl: "https://alex-alexiev.github.io/files/projects/rope.png",
    tags: ["Computer Vision", "Machine Learning", "Robotics", "AI"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Implantable Medical Devices",
    description:
      "Development of implantable systems for medical applications, including the opioid safety device. This project focuses on creating safe, reliable implantable technology for monitoring and intervention.",
    imageUrl: "https://alex-alexiev.github.io/files/projects/tamp.png",
    tags: ["Biomedical", "Electronics", "Medical Devices", "Safety Systems"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Ingestible Sensing Technologies",
    description:
      "Research and development of ingestible capsules with sensing capabilities for medical diagnostics and monitoring. This includes the light-reflectance sensing capsule for automated ischemia detection.",
    imageUrl: "https://alex-alexiev.github.io/files/projects/tft.png",
    tags: ["Medical Sensors", "Diagnostics", "Embedded Systems"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Microactuator Systems",
    description:
      "Design and development of electrically-triggered microactuators powered by aluminum-nickel nanofilm. This research explores novel actuation mechanisms for small-scale robotic applications.",
    imageUrl: "https://alex-alexiev.github.io/files/projects/jet.png",
    tags: [
      "Nanofilm",
      "Actuators",
      "Electrical Engineering",
      "Materials Science",
    ],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Machine Learning for Gaming Applications",
    description:
      "Application of machine learning techniques in gaming contexts during internship at Electronic Arts. This work focused on enhancing game AI and player experience through advanced algorithms.",
    imageUrl: "https://alex-alexiev.github.io/files/projects/7558.png",
    tags: ["Machine Learning", "Game Development", "AI", "Player Experience"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Robotic Mechanical Design",
    description:
      "Mechanical design and engineering for robotic systems, focusing on the integration of sensors, actuators, and structural components to create functional robotic platforms.",
    imageUrl: "https://alex-alexiev.github.io/files/projects/drones.png",
    tags: ["Mechanical Engineering", "CAD", "Robotics", "Prototyping"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

// Experience data based on the bio information
const experiences = [
  {
    title: "Undergraduate Researcher",
    company: "Robot Vision and Learning Group",
    location: "University of Toronto",
    period: "Current",
    description: [
      "Currently working on novel methods for robots to manipulate ropes in 3D.",
      "Created a computer vision pipeline to incorporate learning into task and motion planning (TAMP) problems by learning representations for 3D scenes with a series of CNNs and GNNs using perception data and automatically generated scene graphs from object poses.",
      "Used Slurm and Docker to parallelize multiple data collection instances from a DRAKE simulation of a Franka Panda environment and multiple model training sessions in Tensorflow to gather training statistics and compare different models efficiently.",
    ],
    imageUrl: "/images/rbl-logo.png",
  },
  {
    title: "Biomedical Robotics Researcher",
    company: "MIT",
    location: "Massachusetts Institute of Technology",
    period: "Previous",
    description: [
      "Led the development of a pill sized ingestible robot to autonomously deliver mRNA vaccines inside the stomach through a non-invasive manner. (Manuscript under preperation)",
      "Created an ingestible robot to create a map of the small intestine in 10 wavelengths to non-invasively and autonomously detect internal bleeding and bruising. (Manuscript under preparation)",
      "Developed a low power algorithm in C++ to fuse sensor data on an implant and detect opioid overdoses. An Implantable System for Opioid Safety, Device 100517",
    ],
    imageUrl:
      "https://alex-alexiev.github.io/files/images/l4te-logo-teal-large.webp",
  },
  {
    title: "Machine Learning Intern",
    company: "Electronic Arts",
    location: "EA",
    period: "Previous",
    description: [
      "Created a tool for the Frostbite game engine in C++ to gather 3D bounding boxes for key animation objects and stream the data to a remote server for machine learning models.",
      "Optimized the FIFA game testing process by designing an Autoencoder CNN with Tensorflow to detect visual animation glitches and therefore allowing human game testers to focus on more complex feedback.",
      "Gained practical experience in artificial intelligence.",
    ],
    imageUrl: "/images/ea-logo.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar name={profileData.name} />

      <div className="flex-grow">
        <ProfileSection {...profileData} />
        <PublicationsSection publications={publications} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
