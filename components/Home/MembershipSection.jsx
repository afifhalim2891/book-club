import Link from "next/link";
import { GoCheckbox } from "react-icons/go";

export default function MembershipSection() {
  return (
    <section className=" py-20" id="membership">
      <h3 className="text-5xl font-light text-center mb-12">
        Membership options
      </h3>
      <div className="flex justify-center items-center gap-6">
        <Option
          type="starter"
          price={19}
          benefits={["1 book/month", "Online forums"]}
        />
        <Option
          type="pro"
          price={29}
          benefits={["2 book/month", "Virtual meetups"]}
          center
        />
        <Option
          type="enterprise"
          price={39}
          benefits={["Team access", "Private sessions"]}
        />
      </div>
    </section>
  );
}

function Option({ type, price, benefits, center }) {
  let style = "bg-white shadow-2xl rounded-2xl w-1/4";

  if (center) {
    style = style + " px-6 py-10 bg-gradient-glow animate-glow";
  } else {
    style = style + " p-6";
  }

  return (
    <div className={style}>
      <h4 className="text-2xl font-medium mb-3 capitalize">{type}</h4>
      <p className="mb-6">
        <span className="text-4xl font-semibold mr-2">${price}</span>
        <span className="text-xl">/month</span>
      </p>
      <div
        className={`border-[1px] ${
          center ? "border-slate-900" : "border-slate-200"
        } `}
      ></div>
      <ul className="flex flex-col gap-1 w-full mt-4 mb-6">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className={`${
              center ? "text-slate-900" : "text-slate-500"
            } flex gap-3 font-light`}
          >
            <GoCheckbox className="text-2xl" />
            <p className="w-[80%]">{benefit}</p>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="bg-amber-400 w-full block text-center p-3 rounded-md
        uppercase font-semibold hover:bg-amber-300 duration-150"
      >
        subscribe now
      </Link>
    </div>
  );
}
