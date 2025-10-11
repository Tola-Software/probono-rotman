import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { HoursLocation } from "@/components/HoursLocation";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
      <Hero />
      <WhyUs />
      <HoursLocation />
      <Testimonials />
    </div>
  );
}
