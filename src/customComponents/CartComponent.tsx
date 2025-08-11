import Title from "antd/es/typography/Title";
import { useState } from "react";
import type { CartItem } from "../stores/cartStore";

const CartComponent = () => {
  const raw = localStorage.getItem("cozy-cart");
  const cart = raw ? JSON.parse(raw) : { state: { items: [] } };
  const [items, setItems] = useState<CartItem[]>(cart.state.items || []);

  const updateQuantity = (index: number, qty: number) => {
    if (qty < 1) return; 
    const updated = [...items];
    updated[index].qty = qty;
    setItems(updated);
    localStorage.setItem(
      "cozy-cart",
      JSON.stringify({ state: { items: updated }, version: 0 })
    );
  };

  const subTotal = items.reduce(
    (acc, e) => acc + e.cost * (e.qty || 1),
    0
  );
  const shipping = 50;
  const total = subTotal + shipping;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {items.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((e, index) => (
              <div
                key={index}
                className="grid grid-cols-2 items-center p-4 border rounded-lg shadow-lg bg-white"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <div className="flex flex-col">
                    <h5 className="text-lg font-semibold text-gray-800">
                      {e.name}
                    </h5>
                    <p className="text-sm text-gray-500">${e.cost}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-end">
                  <button
                    onClick={() =>
                      updateQuantity(index, (e.qty || 1) - 1)
                    }
                    className="w-8 h-8 flex items-center justify-center border rounded-full text-lg font-bold hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium">
                    {e.qty || 1}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(index, (e.qty || 1) + 1)
                    }
                    className="w-8 h-8 flex items-center justify-center border rounded-full text-lg font-bold hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 border rounded-lg shadow-sm bg-white">
            <Title level={3} className="!mb-4">
              Order Summary
            </Title>
            <section className="flex justify-between text-gray-700">
              <div className="grid gap-2 text-[#966B4F]">
                <span>Subtotal</span>
                <span>Shipping</span>
                <span>Taxes</span>
                <span className="font-semibold">Total</span>
              </div>
              <div className="grid gap-2 text-gray-900 font-medium">
                <span>${subTotal.toFixed(2)}</span>
                <span>${shipping.toFixed(2)}</span>
                <span>$0.00</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
