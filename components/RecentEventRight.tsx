import Image from "next/image";
import React from "react";

const RecentEventRight = () => {
  return (
    <div className="relative flex flex-row-reverse mx-auto w-[75%] h-auto my-32 align-right">
      <div className="flex">
        <Image
          src="/images/img_event.png"
          height={500}
          width={680}
          alt=""
          className=""
        />
      </div>
      <div className="absolute -bottom-9 left-0 h-72 w-[50%] bg-[#9C9C9C73] flex flex-col gap-3 p-5">
        <p className="font-roboto font-bold text-base h-4 w-20">18/06/2023</p>
        <h1 className="font-roboto h-10 w-56 font-semibold text-4xl tracking-tight">
          EVENT NAME
        </h1>
        <p className="font-roboto font-medium text-base">
          Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis
          interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet
          consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor
          bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam
          pulvinar duis interdum accumsan tempor bibendum amet.
        </p>
      </div>
    </div>
  );
};

export default RecentEventRight;
