import { useCartStore } from "../stores/cartStore";

const CartBadge = () => {
  const count = useCartStore(s => s.count());
  return <span className="cursor-pointer ml-2 font-semibold absolute -top-1 -right-1 bg-orange-400 text-white text-xs rounded-full px-1.5 py-0.5 shadow-md">{count}</span>;
};

export default CartBadge;