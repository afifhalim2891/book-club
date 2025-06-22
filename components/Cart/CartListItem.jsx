import { useStore } from "@/store/CartProvider";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";

export default function CartListItem({ item }) {
  const deleteCart = useStore((state) => state.deleteCart);

  const handleDeleteItem = () => {
    deleteCart(item.id, true);
  };

  return (
    <li>
      <div className="grid grid-cols-[40px_150px_1fr_80px_80px_100px]  grid-rows-1 gap-1 items-center font-extralight text-xs py-2">
        <button className="cursor-pointer" onClick={handleDeleteItem}>
          <GoTrash className="text-xl hover:text-red-500" />
        </button>

        <Image
          src={item.image}
          alt={`${item.title} cover image`}
          width={500}
          height={500}
        />

        <h4 className="ml-3 ">{item.title}</h4>
        <span className="">{`RM ${item.price.toFixed(2)}`}</span>
        <span className="justify-self-center">
          <AdjustQuantity item={item} />
        </span>
        <span className="justify-self-center">{`RM ${(
          item.price * item.quantity
        ).toFixed(2)}`}</span>
      </div>
    </li>
  );
}

function AdjustQuantity({ item }) {
  const addCart = useStore((state) => state.addCart);
  const deleteCart = useStore((state) => state.deleteCart);

  const handleDecreaseQuantity = () => {
    deleteCart(item.id);
  };

  const handleIncreaseQuantity = () => {
    addCart(item);
  };

  return (
    <div className="flex items-center gap-2">
      {item.stockAvailable === 1 ? null : (
        <button className="cursor-pointer" onClick={handleDecreaseQuantity}>
          <HiOutlineMinusCircle className="text-2xl text-slate-600 hover:text-red-500" />
        </button>
      )}

      <span>{item.quantity}</span>
      {item.quantity < item.stockAvailable && (
        <button className="cursor-pointer" onClick={handleIncreaseQuantity}>
          <HiOutlinePlusCircle className="text-2xl text-slate-600 hover:text-green-500" />
        </button>
      )}
    </div>
  );
}
