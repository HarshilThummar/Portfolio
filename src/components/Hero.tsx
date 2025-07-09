import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#0b0c2a] min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            My Self, <br />
            <span className="text-[#ff6e6e]">Rob Oliver</span>
          </h1>
          <p className="text-[#b1b1d1] mt-6 max-w-md">
            Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-[#0b0c2a] transition">
            Download CV
          </button>
        </div>

        {/* Right Image Card Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg grayscale w-[250px] md:w-[300px]">
            <img
              src="/profile.png"
              alt="Rob Oliver"
              className="rounded-lg w-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg">
            I am a <span className="text-[#7e6fff] underline">Engineer</span>
          </p>
        </div>
      </div>
    </section>
  );
}
