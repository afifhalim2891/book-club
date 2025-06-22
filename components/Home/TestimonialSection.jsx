import { HiMiniStar } from "react-icons/hi2";

export default function TestimonialSection() {
  return (
    <section className="flex flex-col items-center">
      <span className="flex gap-1 mb-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <HiMiniStar key={index} className="text-amber-500 text-3xl" />
        ))}
      </span>
      <p className="font-light text-3xl text-center w-[65%]">
        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        rerum odit voluptas illo mollitia aperiam laboriosam ex, sed consectetur
        ratione.&quot;
      </p>
      <span className="text-slate-500 font-light mt-5">
        Sarah Chen - Book enthusiast
      </span>
    </section>
  );
}
