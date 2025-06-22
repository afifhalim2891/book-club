import profile1 from "@/public/profile-1.jpg";
import profile2 from "@/public/profile-2.jpg";
import profile3 from "@/public/profile-3.jpg";
import Image from "next/image";
import { HiMiniStar } from "react-icons/hi2";
const profileImages = [profile1, profile2, profile3];

export default function Rating() {
  return (
    <div className="flex items-center gap-5 ">
      <div className="flex">
        {profileImages.map((img, i) => (
          <Image
            key={img.src}
            src={img}
            alt={`profile image ${i + 1}`}
            className="h-10 w-10 rounded-full"
          />
        ))}
      </div>
      <div>
        <span className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <HiMiniStar key={index} className="text-amber-500" />
          ))}
        </span>

        <p className="text-sm">200+ bookworms joined already</p>
      </div>
    </div>
  );
}
