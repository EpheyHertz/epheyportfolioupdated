'use client'
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
 return(
  <main className="relative bg-black-100 flex justify-center 
  items-center flex-col mx-auto overflow-clip sm:px-10 px-5">
    <div className="max-w-7xl w-full ">
    <FloatingNav
  className=""
  navItems={navItems}
/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Clients/>
      <Experience/>
      <Approach/>
      <Footer/>
    </div>
  </main>
 )
   

}
