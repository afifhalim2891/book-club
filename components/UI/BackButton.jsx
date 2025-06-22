"use client";

import { FaArrowLeftLong } from "react-icons/fa6";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2 text-md font-light px-6 py-2  bg-amber-400 hover:bg-amber-300 text-gray-800 cursor-pointer duration-200 rounded-sm"
    >
      <FaArrowLeftLong />
      Go back
    </button>
  );
}
