import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Milestones } from "@/components/sections/Milestones";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { Clients } from "@/components/sections/Clients";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Milestones />
      <WhyChooseUs />
      <Industries />
      <Clients />
      <CTA />
      <Contact />
    </>
  );
}
