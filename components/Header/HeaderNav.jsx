import Image from "next/image";
import Link from "next/link";
import booklogo from "@/public/bookworm.png";
import SideNav from "./SideNav";

export default function HeaderNav() {
  return (
    <header className="flex justify-between items-center py-3 px-5 border-b border-slate-200 sticky top-0 z-50  bg-white/30 backdrop-blur-lg">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image src={booklogo} alt="book club logo" className="w-12 h-12" />
          <span className="text-lg font-semibold">The Bookworms</span>
        </Link>
      </div>
      <SideNav />
    </header>
  );
}
