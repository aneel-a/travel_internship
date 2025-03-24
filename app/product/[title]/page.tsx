"use client";
import React, { useState, useEffect } from "react";
import NotFound from "../../not-found";
import Image from "next/image";
import { useParams } from "next/navigation"; // ✅ Use this instead of direct params access

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
};

async function fetchProduct(slug: string) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) return undefined;

  try {
    const data = await res.json();
    return data.find((product: any) => generateSlug(product.title) === slug);
  } catch (error) {
    return undefined;
  }
}

export default function ProductDetail() {
  const params = useParams(); // ✅ Unwrap `params`
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!params.title) return; // Avoid errors when `params.title` is undefined
      const fetchedProduct = await fetchProduct(params.title as string);
      setProduct(fetchedProduct);
    };
    fetchProductData();
  }, [params.title]);

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");//Check if the cart exists
      cart.push(product); //Add the product to it
      localStorage.setItem("cart", JSON.stringify(cart)); //Save the updated cart so it’s there next time.
    }
  };

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full md:pl-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-sm text-gray-600 mb-4">{product.category}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">${product.price}</p>
          <button onClick={addToCart} className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
