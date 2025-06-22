import bgImage from "@/public/journey-background.jpg";
import rightArrowImg from "@/public/right-arrow.png";
import Image from "next/image";

export default function JourneySection() {
  return (
    <section className="mt-16 border-t border-b border-slate-200 pt-4 pb-10">
      <div className=" p-6 flex flex-col justify-center h-full text-white">
        <h3 className="text-5xl font-light text-center mb-10 leading-tight text-black">
          Your reading journey
        </h3>
        <div className="flex gap-20 justify-center flex-wrap">
          <Journey step={1} detail="Choose your membership tier" />
          <Journey step={2} detail="Get your monthly book selection" />
          <Journey step={3} detail="Join our discussion forums" />
          <Journey step={4} detail="Attend exclusive meetups" isEnd />
        </div>
      </div>
    </section>
  );
}

function Journey({ step, detail, isEnd = false }) {
  return (
    <div className="bg-amber-50 p-8 rounded-md shadow-md w-1/6 flex flex-col items-center relative">
      <div className="bg-amber-500 w-8 h-8 flex items-center justify-center mb-5 rounded-full text-white">
        {step}
      </div>
      <span className="leading-tight block text-center text-black">
        {detail}
      </span>
      {!isEnd && (
        <Image
          src={rightArrowImg}
          alt="arrow pointing right"
          className="absolute left-[155px] top-[20px] w-[130px] z-10"
        />
      )}
    </div>
  );
}
