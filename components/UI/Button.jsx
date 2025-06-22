import Link from "next/link";

export default function Button({ type, addStyle, children, ...props }) {
  const btnStyle =
    "inline-flex uppercase items-center bg-amber-400 hover:bg-amber-300 duration-150 text-slate-700 text-sm rounded-md gap-4 cursor-pointer mb-6 " +
    addStyle;

  const Component = type === "button" ? "button" : Link;

  return (
    <Component {...props} className={btnStyle}>
      {children}
    </Component>
  );
}
