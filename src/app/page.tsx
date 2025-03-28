import { Navbar } from "../components/navbar";
import { ProfileSection } from "../components/profile-section";
import { PublicationsSection } from "../components/publications-section";
import { ProjectsSection } from "../components/projects-section";
import { ExperienceSection } from "../components/experience-section";
import { Footer } from "../components/footer";
import {
  navItems,
  publications,
  projects,
  experiences,
  profileData,
} from "../lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar items={navItems} />

      <main className="flex-grow">
        <ProfileSection {...profileData} />
        <PublicationsSection publications={publications} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
      </main>

      <Footer />
    </div>
  );
}
