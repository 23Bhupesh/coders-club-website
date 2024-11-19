import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="h-auto w-full">
      <div className="lg:flex flex-col justify-around items-center mx-auto lg:visible md:visible hidden my-2">
        <Marquee pauseOnHover={true} gradient={true} gradientWidth={50} gradientColor="black" speed={100} direction="left" className="h-[100%] w-full">
          <Image height={200} width={300} src="/images/img_gall_col_1_1.png" alt="Event 1" className="m-4 lg:h-56 md:h-40 h-28 w-auto"/>
          <Image height={200} width={300} src="/images/img_gall_col_1_2.png" alt="Event 2" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_1_3.png" alt="Event 3" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_1_4.png" alt="Event 4" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_1_5.JPG" alt="Event 5" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
        </Marquee>
      </div>

      <div className="flex flex-col justify-around items-center mx-auto my-2">
        <Marquee pauseOnHover={true} gradient={true} gradientWidth={50} gradientColor="black"  speed={100} direction="right" className="h-[100%] w-full">
          <Image height={200} width={300} src="/images/img_gall_col_2_1.png" alt="Event 1" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_2_2.png" alt="Event 2" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_2_3.png" alt="Event 3" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_2_4.png" alt="Event 4" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_2_5.jpg" alt="Event 5" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
        </Marquee>
      </div>

      <div className="flex flex-col justify-around items-center mx-auto my-2">
        <Marquee pauseOnHover={true} gradient={true} gradientWidth={50} gradientColor="black"  speed={100} direction="left" className="h-[100%] w-full">
          <Image height={200} width={300} src="/images/img_gall_col_3_2.png" alt="Event 1" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_3_3.png" alt="Event 2" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_3_4.png" alt="Event 3" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_3_1.png" alt="Event 4" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_3_5.JPG" alt="Event 5" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
          <Image height={200} width={300} src="/images/img_gall_col_3_6.jpeg" alt="Event 6" className="m-4 lg:h-56 md:h-40 h-28 w-auto" />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
