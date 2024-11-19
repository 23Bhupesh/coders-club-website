import React from "react";
import DataTeam2023 from "../../public/DataTeam2023";
import DataTeam2024 from "../../public/DataTeam2024";
import DataFaculty from "../../public/DataFaculty";
import Image from "next/image";
import Link from "next/link";
import ImgCard from "@/components/ImgCard";
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <div className="bg-custom-bg">
      <Navbar />
      <div className="font-lemonmilk text-white pt-20">
        {/* headline div */}
        <div className="lg:h-screen md:h-screen h-auto w-full flex justify-center items-center lg:my-0 md:my-0 my-20">
          <p className=" w-[75%] h-64 leading-tight text-center flex justify-center items-center font-bold lg:text-8xl md:text-7xl text-5xl ">
            PEOPLE WHO LEAD OUR COMMUNITY
          </p>
        </div>

        {/* Our_Megaminds div */}
        <div className="lg:h-screen h-auto w-full">
          {/* font */}
          <div className="lg:w-[46%] md:w-[46%] w-auto h-24 flex justify-center items-center mx-auto">
            <p className="font-bold lg:text-6xl md:text-5xl text-3xl flex justify-center">
              OUR MEGAMINDS
            </p>
          </div>

          {/* Megaminds images */}
          <div className="lg:flex md:flex h-auto justify-center gap-7 my-10 items-center lg:mx-0 md:mx-0 mx-2">
            <div className="flex flex-col gap-2 order-1 lg:order-2 md:order-2 lg:my-0 md:my-0 my-5">
              <Image
                height={320}
                width={320}
                src="/images/img_prateek_sir(Megamind).jpg"
                alt="Prateek Meshram Image"
                className="lg:h-80 md:h-80 h-56 lg:w-80 md:w-80 w-56 mx-auto rounded-lg"
              />
              <div className="flex flex-col items-center lg:h-4 h-auto">
                <p className="font-bold text-base my-1">Prateek Meshram</p>
                <Link href="https://www.linkedin.com/in/prateek-meshram-384ba453/">
                  <Image
                    src="images/linkedin.svg"
                    height={20}
                    width={20}
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:order-1 md:order-1 order-2 lg:my-0 md:my-0 my-5">
              <Image
                height={256}
                width={256}
                src="/images/img_harsh(Megamind).jpg"
                alt="Harsh Bhattad Image"
                className="lg:h-64 md:h-64 h-56 lg:w-64 md:w-64 w-56 mx-auto rounded-md"
              />
              <div className="flex flex-col items-center lg:h-4 h-auto">
                <p className="font-bold text-base my-1">Harsh Bhattad</p>
                <Link href="https://www.linkedin.com/in/designbyharsh/">
                  <Image
                    src="images/linkedin.svg"
                    height={20}
                    width={20}
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 order-3 lg:my-0 md:my-0 my-5">
              <Image
                src="/images/img_devarshi(Megamind).jpg"
                height={256}
                width={256}
                alt="Devarshi Mahajan Image"
                className="lg:h-64 md:h-64 h-56 lg:w-64 md:w-64 w-56 mx-auto rounded-md"
              />
              <div className="flex flex-col items-center lg:h-4 lg-auto">
                <p className="font-bold text-base my-1">Devarshi Mahajan</p>
                <Link href="https://www.linkedin.com/in/devarshi-mahajan-973a80209/">
                  <Image
                    src="images/linkedin.svg"
                    height={20}
                    width={20}
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty coordinators division */}
        <div className="w-full my-10">
          <div className="flex justify-center my-10">
            <Image
              height={78}
              width={59}
              src="images/heading_left_design.svg"
              alt=""
              className="mx-4 lg:block md:block hidden"
            />
            <p className="font-bold lg:text-6xl md:text-6xl text-3xl text-center flex justify-center">
              faculty coordinators
            </p>
            <Image
              height={78}
              width={59}
              src="images/heading_right_design.svg"
              alt=""
              className="mx-4 lg:block md:block hidden"
            />
          </div>

          {/* faculty images */}
          <div className="flex justify-center gap-4 flex-wrap w-auto lg:px-0 md:px-0 px-2">
            {DataFaculty.map((person: any, index: number) => (
              <ImgCard
                key={index}
                img={person.img}
                name={person.name}
                domain={person.domain}
                linkedin={person.linkedin}
              />
            ))}
          </div>
        </div>

        {/* Team 2024 division*/}
        <div className="flex justify-center mt-28">
          <Image
            height={78}
            width={59}
            src="images/heading_left_design.svg"
            alt=""
            className="mx-4 lg:block md:block hidden"
          />
          <p className="font-bold lg:text-6xl md:text-5xl text-4xl flex justify-center ">
            our team 2024
          </p>
          <Image
            height={78}
            width={59}
            src="images/heading_right_design.svg"
            alt=""
            className="mx-4 lg:block md:block hidden"
          />
        </div>

        {/* Team-2024 Images */}
        <div className="my-10">
          <div className="flex justify-center flex-wrap gap-4 mb-10 lg:w-[83%] md:w-[83%] w-auto mx-auto lg:px-0 md:px-0 px-2">
            {DataTeam2024.map((person: any, index: number) => (
              <ImgCard
                key={index}
                img={person.img}
                name={person.name}
                domain={person.domain}
                linkedin={person.linkedin}
              />
            ))}
          </div>
        </div>


        {/* Team 2023 division*/}
        <div className="flex justify-center mt-28">
          <Image
            height={78}
            width={59}
            src="images/heading_left_design.svg"
            alt=""
            className="mx-4 lg:block md:block hidden"
          />
          <p className="font-bold lg:text-6xl md:text-5xl text-4xl flex justify-center ">
            our team 2023
          </p>
          <Image
            height={78}
            width={59}
            src="images/heading_right_design.svg"
            alt=""
            className="mx-4 lg:block md:block hidden"
          />
        </div>

        {/* Team-2023 Images */}
        <div className="my-10">
          <div className="flex justify-center flex-wrap gap-4 mb-10 lg:w-[83%] md:w-[83%] w-auto mx-auto lg:px-0 md:px-0 px-2">
            {DataTeam2023.map((person: any, index: number) => (
              <ImgCard
                key={index}
                img={person.img}
                name={person.name}
                domain={person.domain}
                linkedin={person.linkedin}
              />
            ))}
          </div>
        </div>

        {/* Founding Team division */}
        <div className="flex justify-center mt-28 ">
          <Image
            height={78}
            width={59}
            src="images/heading_left_design.svg"
            alt=""
            className="mx-4 hidden lg:block md:block"
          />
          <p className="font-bold lg:text-6xl md:text-5xl text-4xl flex justify-center ">
            founding team
          </p>
          <Image
            height={78}
            width={59}
            src="images/heading_right_design.svg"
            alt=""
            className="mx-4 hidden lg:block md:block"
          />
        </div>
        <div className="h-auto w-auto mx-auto mt-10 mb-28 px-5">
          <Image
            src="/images/img_founding_team_2.jpg"
            height={300}
            width={1000}
            alt="founding Team Image"
            className="mx-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
