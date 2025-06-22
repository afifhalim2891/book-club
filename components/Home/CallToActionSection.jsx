import { HiArrowUp } from "react-icons/hi2";
import Button from "../UI/Button";
import Rating from "../UI/Rating";

export default function CallToActionSection() {
  return (
    <section className="bg-amber-100 mt-16 pt-18 pb-14  rounded-t-2xl text-center flex flex-col items-center">
      <h3 className="text-4xl text-amber-950 font-semibold mb-6">
        Ready to ready some books?
      </h3>
      <Button href="#membership" addStyle="py-4 px-8">
        review membership option <HiArrowUp />
      </Button>
      <Rating />
    </section>
  );
}
