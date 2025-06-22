// import { HiMiniStar } from "react-icons/hi2";

// export default function BookRating({ rating }) {
//   return (
//     <span className="flex gap-1">
//       {Array.from({ length: 5 }).map((_, index) => (
//         <HiMiniStar
//           key={index}
//           className={`${
//             index + 1 <= rating ? "text-amber-500" : "text-gray-400"
//           } `}
//         />
//       ))}
//     </span>
//   );
// }

import { HiMiniStar } from "react-icons/hi2";

export default function BookRating({ rating, size = "text-lg" }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const starPosition = index + 1;
        const isFilled = starPosition <= Math.floor(rating);
        const isHalfFilled = !isFilled && starPosition - 0.5 <= rating;

        return (
          <div key={index} className="relative">
            <HiMiniStar className={`text-gray-400 ${size}`} />
            {isFilled && (
              <HiMiniStar
                className={`absolute top-0 left-0 text-amber-500 ${size}`}
              />
            )}
            {isHalfFilled && (
              <div
                className="absolute top-0 left-0 overflow-hidden "
                style={{ width: "50%" }}
              >
                <HiMiniStar className={`text-amber-500 ${size}`} />
              </div>
            )}
          </div>
        );
      })}
    </span>
  );
}
