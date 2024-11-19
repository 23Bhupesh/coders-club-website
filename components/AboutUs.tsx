import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="lg:h-auto md:h-auto h-auto w-full text-white flex flex-col lg:p-10 md:p-10 p-5 lg:mt-10 md:mt-10 mt-2">
          <p className="font-inter font-normal lg:text-xl md:text-xl text-xs text-[#B0AEAE] h-6 w-28 mx-0 lg:mb-3 md:mb-3 mb-0">
            ABOUT US
          </p>

          {/* Parent div */}
          <div className="lg:flex md:flex flex-row-reverse">
            {/* photo */}
            <div className="w-full lg:w-1/2 md:w-1/2 lg:p-2 md:p-2 p-0">
              <Image
                height={400}
                width={600}
                src="/images/img_group.png"
                alt=""
                className="mx-auto"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2 md:w-1/2 w-auto flex flex-col gap-4 mt-5 text-justify font-semibold font-inter lg:text-2xl text-base">
              <div className="lg:w-[90%] md:w-[90%] h-auto w-auto">
                The Coders Club is a vibrant community of tech lovers,
                creatives, and organizers passionate about coding, innovation
                and collaboration.
              </div>
              <div className="h-auto lg:w-[90%] md:w-[90%] w-auto">
                Our mission is to foster a collaborative environment where
                students can enhance their skills, share knowledge, and work on
                real-world projects.
              </div>
              <div className="lg:w-[90%] md:w-[90%] h-auto w-auto lg:mb-0 md:mb-5 mb-5">
                Join us to code, learn, and grow together!
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="lg:mx-0 md:mx-0 mx-auto lg:py-0 md:py-0 py-4">
            <Link href="/team">
              <button className="border-2 font-inter font-semibold rounded-md w-auto px-2 lg:h-14 md:h-10 h-8 ">
                MEET THE TEAM
              </button>
            </Link>
          </div>
        </div>
    )
}

export default AboutUs;