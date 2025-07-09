import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Or use <img> if not using Next.js

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-darkbg text-white font-poppins relative px-4"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            My Self, <br />
            <span className="text-rob">Rob Oliver</span>
          </h1>
          <p className="text-textlight mt-6 max-w-md mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-6 text-white border-white hover:bg-white hover:text-darkbg transition"
          >
            Download CV
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg grayscale w-[250px] md:w-[300px]">
            {/* Image path — replace with your actual image */}
            <Image
              src="/profile.png"
              alt="Rob Oliver"
              width={300}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg">
            I am a <span className="text-engineer underline">Engineer</span>
          </p>
        </div>
      </div>

      {/* Optional Scroll Down Arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
