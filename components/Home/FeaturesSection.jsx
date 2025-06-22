import Image from "next/image";
import { GoCheckbox } from "react-icons/go";
import featureImg1 from "@/public/Feature-image-1.jpg";
import featureImg2 from "@/public/Feature-image-2.jpg";

export default function FeaturesSection() {
  return (
    <section className="mt-10">
      <article className="flex items-center gap-16 p-10">
        <Image
          src={featureImg1}
          alt="Person reading a book illustration"
          className="w-1/2 rounded-xl"
        />
        <div className="w-1/2 py-10">
          <h1 className="text-5xl font-light mb-12">
            Read together, <br /> grow together
          </h1>
          <ul className="flex flex-col gap-5 w-full">
            <li className="text-slate-500 flex gap-6">
              <GoCheckbox className="text-3xl" />
              <p className="w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, corporis!
              </p>
            </li>
            <li className="text-slate-500 flex gap-6">
              <GoCheckbox className="text-3xl" />
              <p className="w-[80%]">
                Esse pariatur eum accusantium facilis veniam voluptates magni
                amet, in cumque.
              </p>
            </li>
            <li className="text-slate-500 flex gap-6">
              <GoCheckbox className="text-3xl" />
              <p className="w-[80%]">
                Alias earum numquam officia saepe, blanditiis ipsum totam error
                ducimus adipisci vero quibusdam?
              </p>
            </li>
            <li className="text-slate-500 flex gap-6">
              <GoCheckbox className="text-3xl" />
              <p className="w-[80%]">
                Harum facilis, nesciunt amet facere dolor sint officiis
                doloremque est necessitatibus, explicabo dolore aspernatur vel,
                quasi totam veritatis saepe minus.
              </p>
            </li>
          </ul>
        </div>
      </article>
      <article className="flex items-center gap-x-16 p-10 mt-10">
        <div className="w-1/2">
          <h1 className="text-5xl font-light mb-12">
            Not your average book club
          </h1>
          <p className="text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ducimus molestiae, autem aliquam expedita eius nisi
            praesentium ab illum amet neque reiciendis labore tempore quibusdam
            numquam similique quod quos itaque dignissimos
          </p>
        </div>
        <Image
          src={featureImg2}
          alt="Person reading a book illustration"
          className="w-1/2 rounded-xl"
        />
      </article>
    </section>
  );
}
