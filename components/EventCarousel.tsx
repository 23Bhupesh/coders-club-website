import Image from "next/image";
import Marquee from "react-fast-marquee";
import DataCarouselImg from "../public/DataCarouselImg.js";

const EventCarousel = () => {
  return (
    <div className="w-[100%] bg-[#ffffff] flex">
      <Marquee gradient={false} speed={100} pauseOnHover={true} className="flex items-center h-[100%]">
        <ul className=" flex items-center">
        {DataCarouselImg.map((e: any, index: number) => (
          <Image key={index} height={e.height} width={e.width} src={e.src} alt={e.alt} className="border-x-white border-2 w-auto lg:h-52 md:h-40 h-28"/>
        ))}
        </ul>
      </Marquee>
      </div>
  );
};

export default EventCarousel;
