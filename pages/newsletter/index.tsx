import Image from "next/image";
import React, { useState, FormEvent } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("We have sent you an email. Please check your inbox and verify your email address!");
        setEmail(""); // Clear email input field
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Subscription failed"}`);
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="w-full lg:h-screen md:h-screen h-auto pt-20">
        <div className="text-white flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col text-center my-16 mx-auto">
            <div className="w-8 h-3 font-normal text-xl font-leckerli">The</div>
            <div className="p-0 w-72 h-24 font-lato font-semibold text-8xl">
              ECHO
            </div>
            <div className="w-auto h-5 font-lemonmilk font-normal text-sm tracking-extra-widest mx-auto">
              WEEKLY NEWSLETTER
            </div>
          </div>

          {/* Signup Form */}
          <div className="my-10 mb-40 lg:flex lg:gap-5 md:gap-5 h-40 w-auto lg:justify-between md:justify-around justify-center">
            <div className="lg:h-40 md:h-40 h-28 lg:w-[29%] md:w-[75%] w-[75%] mx-auto lg:mx-0 md:mx-auto font-lemonmilk font-thin lg:text-6xl md:text-5xl text-4xl lg:leading-normal md:leading-normal lg:text-left text-center">
              NEWSLETTER SIGNUP
            </div>
            <div className="flex justify-center items-end mx-auto lg:w-[71%] md:w-[71%] text-center">
              <form onSubmit={handleSubmit} className="lg:flex items-end lg:w-full md:full w-auto lg:my-0 md:my-5 my-0">
                <div className="lg:mx-auto md:mx-auto ">
                  <input
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="lg:w-96 md:w-80 w-64 lg:mx-0 md:mx-0 mx-auto h-6 border-b-2 bg-transparent text-white focus:outline-0"
                    required
                    type="email"
                  />
                </div>
                <div className="flex w-auto lg:my-0 md:my-5 my-5 items-end">
                  <button
                    type="submit"
                    className="h-14 w-20 mx-auto rounded-sm border-2"
                  >
                    <Image
                      height={14}
                      width={32}
                      src="/images/arrow_button.svg"
                      alt="Submit"
                      className="m-auto"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
