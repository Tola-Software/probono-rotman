import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { MenuSection } from "@/components/MenuSection";
import { HoursLocation } from "@/components/HoursLocation";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
      <section id="home">
        <Hero />
      </section>
      <section id="menu">
        <MenuSection />
      </section>
      <section id="about">
        <WhyUs />
      </section>
      <section id="hours">
        <HoursLocation />
      </section>
      <section id="contact">
        <Testimonials />
      </section>
    </div>
  );
}
