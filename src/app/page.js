import About from "@/components/About";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Map from "@/components/Map";
import Milestones from "@/components/Milestone";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
<div>  
  <Navbar/>
  <Hero/> 
  <About/>  
  <Milestones/> 
  <Services/>  
  <Map/>
  <Process/> 
  
  <ContactForm/>
  <Footer/>
</div>
  );
}
