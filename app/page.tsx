import Navbar from "./components/Navbar";
import AnnouncementPopover from "./components/AnnouncementPopover";
import MotionProvider from "./components/MotionProvider";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import RoadmapCCNA from "./sections/RoadmapCCNA";
import Writeups from "./sections/Writeups";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <MotionProvider>
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <RoadmapCCNA />
          <Writeups />
          <Contact />
        </main>
        <AnnouncementPopover />
      </div>
    </MotionProvider>
  );
}
