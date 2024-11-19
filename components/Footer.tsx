import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-44 text-white mt-20">
      {/* want to collaborate */}

      <div className="flex">
        <div className="mx-auto flex items-center">
          <Image src="images/collab_left.svg" height={35} width={25} alt="" />
          <div className="h-6 md:w-52 lg:w-52 w-auto lg:px-0 md:px-0 px-1 flex items-center">
            <p className="font-inter font-normal md:text-xl lg:text-xl text-xs align-middle mx-auto">
              Want to Collaborate?
            </p>
          </div>
          <Image src="images/collab_right.svg" height={35} width={25} alt="" />
        </div>
      </div>

      {/*let's chat*/}

      <div className="flex md:my-12 lg:my-12 my-5">
        <p className="mx-auto text-center font-inter font-bold md:text-8xl lg:text-8xl text-4xl p-2">
          Let&apos;s Connect
        </p>
      </div>

      {/* contact us */}

      <div>
        <Link href="mailto:coders.club@dypiemr.ac.in" className="flex my-10">
          <button className="mx-auto border-2 rounded-full lg:h-14 md:h-14 lg:w-44 md:w-44 h-10 w-32 border-[#9747FF] font-inter font-normal text-base text-[#9747FF]">
            CONTACT US
          </button>
        </Link>
      </div>

      {/* side logo */}

      <div className="lg:px-10 md:px-6 px-3 hidden lg:visible md:visible">
        <div className="flex items-center gap-2 mt-2">
          <div className="">
            <Image
              src="images/logo_navbar.svg"
              height={52}
              width={50}
              alt="Logo"
            />
          </div>
          <div>
            <p className="font-inter text-xs font-medium">CODERS.DYP</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-[#E8E7EA] w-full">
        <hr />
      </div>

      {/* most active sentence */}

      <div className="lg:flex md:flex p-10 justify-between">
        <div className="flex flex-col justify-between">
          <div className="h-14 w-96 hidden md:block lg:block">
            <p className="font-inter font-normal text-xl leading-6">
              Coders.dyp fuels creativity and innovation in Pune’s tech
              landscape.
            </p>
          </div>

          {/* icons */}
          <div className="w-auto mx-auto lg:mx-0 md:mx-0 flex gap-2 mb-4">
            <Link
              href="https://www.instagram.com/coders.dyp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/instagram_icon.svg"
                width={48}
                height={48}
                alt="Instagram"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/codersdyp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/linkedin_icon.svg"
                width={48}
                height={48}
                alt="LinkedIn"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link
              href="https://chat.whatsapp.com/Dy1BGZyP3cUFTgE7ioUWVo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/whatsapp_icon.svg"
                width={48}
                height={48}
                alt="WhatsApp"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/Codersdyp" target="_blank" rel="noopener noreferrer">
              <Image
                src="images/twitter_icon.svg"
                width={48}
                height={48}
                alt="Twitter"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@codersdyp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/youtube_icon.svg"
                width={48}
                height={48}
                alt="Youtube"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link
              href="https://discord.gg/JRG5crx6m4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/discord_icon.svg"
                width={48}
                height={48}
                alt="Discord"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* address */}
        <div className="md:text-right lg:text-right text-center font-inter font-normal lg:text-xl md:text-lg text-base lg:leading-6 md:leading-6">
          <div className="md:h-20 lg:h-20 h-auto lg:w-96 md:w-96 w-auto mx-auto md:my-auto lg:my-auto my-2">
            D. Y. Patil Educational Complex, Akurdi, Nigdi, Pimpri-Chinchwad,
            Maharashtra ,411035
          </div>
          <div className="my-3 w-auto">coders.club@dypiemr.ac.in</div>
        </div>
      </div>
      <hr />

      <div className="h-auto lg:h-10 md:h-10 w-full flex justify-center items-center font-inter">
        <p className="text-center text-white">
          Designed by{" "}
          <Link
            href="https://www.linkedin.com/in/designbyharsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#909090]"
          >
            Harsh Bhattad{" "}
          </Link>
          | Developed by {""}
          <Link
            href="https://www.linkedin.com/in/bhupeshsahu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#909090]"
          >
            Bhupesh Sahu{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
