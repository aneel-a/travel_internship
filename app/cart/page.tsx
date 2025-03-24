"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleDeleteItem = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex flex-col items-center justify-center mb-10 text-gray-800">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <p className="text-lg mt-2">{cart.length} {cart.length === 1 ? "item" : "items"} in your cart</p>
      {cart.length === 0 ? (
        <p className="text-lg mt-2">Your cart is empty.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {cart.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <p className="ml-4 text-xl font-semibold">{product.title}</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg">${product.price}</p>
                <button
                  onClick={() => handleDeleteItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between flex-row">
            <div className="mt-4 text-xl font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </div>
            <Link href={"/payment"}>
              <button
                onClick={handleCheckout}
                className="mt-4 text-xl font-semibold bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
