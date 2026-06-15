import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Writeups from "./sections/Writeups";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Writeups />
        <Contact />
      </main>
    </div>
  );
}
