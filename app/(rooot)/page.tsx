import Image from "next/image";
import Container from "@/components/Container"
import Banner from "@/components/banner/Banner";
import CategorySection from "@/components/sections/CategorySection";
import DestinationSection from "@/components/sections/DestinationSection";
import BookingSteps from "@/components/sections/BookingSteps";
import Testimonials from "@/components/sections/Testimonials";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import NewsLetterSection from "@/components/sections/NewsletterSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <Container>
   
      <Banner />
      <CategorySection />
      <DestinationSection />
      <BookingSteps />
      <Testimonials />
      <NewsLetterSection />
      <FooterSection />
  
  
  </Container>
  );
}
