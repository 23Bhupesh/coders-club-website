import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeComponent_1 = () => {
  return (
    <div className="bg-[#E7E7E7] lg:h-24 md:h-24 h-10 w-[105%] lg:rotate-2 md:rotate-2 rotate-0 left-8">
      <Marquee gradient={false} speed={100} className="flex items-center h-[100%]">
        <ul className="h-3 my-auto flex items-center font-normal lg:text-3xl md:text-3xl text-xs text-[#212121]">
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="lg:mx-7 md:mx-7 mx-2 lg:h-4 md:h-4 h-2 lg:w-4 md:w-4 w-2" />
          <li className="mx-7">UI/UX</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="lg:mx-7 md:mx-7 mx-2 lg:h-4 md:h-4 h-2 lg:w-4 md:w-4 w-2" />
          <li className="mx-7">MARKETING</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="lg:mx-7 md:mx-7 mx-2 lg:h-4 md:h-4 h-2 lg:w-4 md:w-4 w-2" />
          <li className="mx-7">HACKATHON</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="lg:mx-7 md:mx-7 mx-2 lg:h-4 md:h-4 h-2 lg:w-4 md:w-4 w-2" />
          <li className="mx-7">APPLICATIONS</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="lg:mx-7 md:mx-7 mx-2 lg:h-4 md:h-4 h-2 lg:w-4 md:w-4 w-2" />
          <li className="mx-7">STARTUP IDEAS</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="lg:mx-7 md:mx-7 mx-2 lg:h-4 md:h-4 h-2 lg:w-4 md:w-4 w-2" />
          <li className="mx-7">CREATIVE DESIGN</li>
        </ul>
      </Marquee>
      </div>
  );
};

export default MarqueeComponent_1;
