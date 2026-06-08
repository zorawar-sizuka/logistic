import nextDynamic from "next/dynamic";

import About from "@/components/About";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";

const Milestones = nextDynamic(() => import("@/components/Milestone"));
const Services = nextDynamic(() => import("@/components/Services"));
const Map = nextDynamic(() => import("@/components/Map"));
const Process = nextDynamic(() => import("@/components/Process"));

export const dynamic = "force-static";

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
