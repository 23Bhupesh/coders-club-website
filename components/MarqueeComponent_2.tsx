import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeComponent_2 = () => {
  return (
    <div className="bg-[#212121] text-white h-24 w-[105%] overflow-hidden -rotate-[10deg] -left-6  hidden lg:block md:block ">
      <Marquee gradient={false} speed={100} direction="right" className="flex items-center h-[100%]">
        <ul className="h- my-auto flex items-center font-normal text-3xl">
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="mx-7" />
          <li className="mx-7">HIGHER STUDIES</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="mx-7" />
          <li className="mx-7">CREATIVE DESIGN</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="mx-7" />
          <li className="mx-7">TEAMS</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="mx-7" />
          <li className="mx-7">START-UPS</li>
          <Image height={17} width={16} src="/images/img_bullet.png" alt="" className="mx-7" />
          <li className="mx-7">MANAGEMENT</li>
        </ul>
      </Marquee>
      </div>
  );
};

export default MarqueeComponent_2;
