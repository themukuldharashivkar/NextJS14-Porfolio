import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ProjectsCard from "@/components/ProjectsCard";

export default function Home() {
  return (
    <main className="bg-[#092635]">
      <div className="mx-4 md:mx-20 pb-10">
        <Navbar />
        <Hero />
        <Projects />
        <ContactSection />
      </div>
    </main>
  );
}
