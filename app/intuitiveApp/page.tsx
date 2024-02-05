

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel";

export default function SwipeCarousel() {
  return (
    <Carousel orientation="horizontal"
    opts={{
      align: "start",
      loop: true,
    }}>
     
      <CarouselContent className="carousel-content -ml-2 ">
        <CarouselItem className="basis-1/5 pl-4">
          <Image src="/AppPics/1.png" alt="Image 1" width={200} height={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/2.png" alt="Image 2" width={200} height={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/3.png" alt="Image 3" width={200} height={200} />
        </CarouselItem>
        
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/5.png" alt="Image 2" width={200} height={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/6.png" alt="Image 3" width={200} height={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/7.png" alt="Image 1" width={200} height={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/8.png" alt="Image 2" width={200} height={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/5 pl-4 ">
          <Image src="/AppPics/9.png" alt="Image 3" width={200} height={200} />
        </CarouselItem>
        {/* Add more CarouselItem components for other images */}
      </CarouselContent>
      <CarouselPrevious />
  <CarouselNext />
    </Carousel>
  );
}
