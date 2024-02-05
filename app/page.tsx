import Image from "next/image";
import Navbar from "./navbar/page";
import FirstSect from "./first-section/page";
import SecondSect from "./second-section/page";
import Footer from "./footer/page";
import Testimonial from "./testimonial/page";
import Stats from "./stats/page";
import Contact from "./contactAndJoin/page";
import Carousel from "@/components/carousel";
import Carousel2 from "@/components/carousel2";

export default function Home() {
  return (
    <div>
     <Navbar />
     <FirstSect />
    
     <Carousel />
     <SecondSect />
    
     <Stats />
     <Testimonial />
     <Footer />

    </div>
  );
}
