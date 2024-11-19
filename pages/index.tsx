import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import DataEvents from "../public/DataEvents";
import MarqueeComponent_1 from "@/components/MarqueeComponent_1";
import RecentEvent from "@/components/RecentEvent";
import MarqueeComponent_2 from "@/components/MarqueeComponent_2";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-custom-bg bg-center bg-cover">
      <Navbar />
      <div className="text-white pt-20 overflow-hidden">
        {/* Hero Section */}
        <div className="lg:h-screen md:h-screen h-auto w-full flex flex-col justify-center items-center lg:mt-0 md:mt-0 mt-20">
          <p className="lg:w-[67%] md:w-[67%] w-[91%] lg:h-6 md:h-6 h-auto font-inter font-medium lg:text-xl md:text-xl text-lg flex flex-col text-left lg:px-0 md:px-0 px-2 mb-0 text-[#909090]">
            Hello people!
          </p>
          <h1 className="lg:w-[67%] md:w-[67%] w-[91%] lg:h-72 md:h-72 h-auto font-inter font-bold lg:text-8xl md:text-7xl text-5xl leading-normal text-left lg:px-0 md:px-0 px-2 ">
            We&apos;re Student&apos;s welface club.
          </h1>

          <div className="flex lg:gap-4 md:gap-4 gap-2 lg:my-0 md:my-0 my-4 lg:mx-0 md:mx-0 mx-auto lg:px-0 md:px-0 px-5">
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
                alt="YouTube"
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link href="https://discord.gg/JRG5crx6m4" target="_blank" rel="noopener noreferrer">
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

        {/* Scrolling Divisions */}
        <div className="">
          <div className="mt-20 -left-6">
            <MarqueeComponent_1 />
          </div>
          <div className="w-full -z-10 relative bottom-[80px] -left-6">
            <MarqueeComponent_2 />
          </div>
        </div>

        {/* About us */}
        <AboutUs/>

        {/* recent Events */}
        <div className="h-auto w-full">
          <h1 className="mx-auto mb-20 mt-5 h-9 w-auto font-lemonmilk font-bold lg:text-5xl md:text-5xl text-2xl text-center tracking-wider">
            RECENT EVENTS
          </h1>
          <div>
          {DataEvents.slice(0, 2).map((event: any, index: number) => (
              <RecentEvent
                key={index}
                eventImage={event.eventImage}
                eventName={event.eventName}
                eventDate={event.eventDate}
                eventDescription={event.eventDescription}
              />
            ))}
          </div>
          <div className="flex px-5">
            <Link href="/events" className="lg:w-auto md:w-auto w-full mx-auto">
              <button className="mx-auto border-2 h-10 lg:w-32 md:w-32 w-full rounded-md font-lemonmilk font-normal text-base">
                SEE MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Cherished Glimpses */}
        <div>
          <h1 className="mx-auto mt-20 mb-16 h-9 w-auto font-lemonmilk font-bold lg:text-5xl md:text-5xl text-2xl text-center tracking-wider">
            Cherished Glimpses
          </h1>
          <div className="">
            <Gallery/>
          </div>  
        </div>
      </div>
    </div>
  );
}
