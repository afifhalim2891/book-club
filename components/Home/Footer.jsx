import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitch } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-amber-100 ">
      <div className="border-t border-amber-900 py-4 max-w-5xl mx-auto flex justify-between items-center text-amber-900">
        <span>&copy; 2025 - Bookworm Club</span>
        <div className="flex justify-between gap-2 text-2xl">
          <IoLogoFacebook />
          <IoLogoInstagram />
          <IoLogoTwitch />
        </div>
      </div>
    </footer>
  );
}
