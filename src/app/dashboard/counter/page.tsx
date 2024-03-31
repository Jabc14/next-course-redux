
import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Carrito de compras en Next.js',
  description: 'Primer contador en Next.js'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}