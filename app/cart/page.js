import Cart from "@/components/Cart/Cart";
import PurchaseSummary from "@/components/Cart/PurchaseSummary";

export default function CartPage() {
  return (
    <main className="grid grid-cols-12 min-h-screen">
      <Cart />
      <PurchaseSummary />
    </main>
  );
}
