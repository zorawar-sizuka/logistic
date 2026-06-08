import dynamic from "next/dynamic";

import About from "@/components/About";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";

const Milestones = dynamic(() => import("@/components/Milestone"));
const Services = dynamic(() => import("@/components/Services"));
const Map = dynamic(() => import("@/components/Map"));
const Process = dynamic(() => import("@/components/Process"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Milestones />
      <Services />
      <Map />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  );
}
