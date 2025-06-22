import Image from "next/image";

import { HiArrowDown } from "react-icons/hi2";
import heroImage from "@/public/man-reading-hero.png";

import Button from "../UI/Button";
import Rating from "../UI/Rating";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center px-2 ">
      <div className="order-2 md:order-1">
        <h1 className="text-6xl font-semibold mb-7">
          Join the ultimate bookworm club
        </h1>

        <p className="mb-5 w-[90%]">
          Turn your reading time into learning time with fellow enthusiasits.
          Get curated recommendations, join vibrant discussions, and level up
          your skills one chapter at a time
        </p>

        <Button href="#membership" addStyle="py-4 px-8">
          review membership options <HiArrowDown />
        </Button>

        <Rating />
      </div>
      <Image
        src={heroImage}
        alt="reading a book illustration"
        className="order-1 md:order-2 w-1/2"
      />
    </section>
  );
}
