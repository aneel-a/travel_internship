"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetail = () => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams(); // Get dynamic route parameter
  const id = params?.id as string; // Ensure it's treated as a string

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          setError("Failed to fetch product data");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]); // Run effect when the id changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <h2 className="mx-auto text-4xl font-bold text-left relative my-14 mb-[15vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-xl 3xl:max-w-screen-3xl">
        Product Details
        <span className="absolute top-11 bottom-0 left-0 w-[15%] h-[3px] bg-yellow-500"></span>
      </h2>
      <div
        key={product.id}
        className="mx-[30vw] my-24 h-[60vh] relative bg-white rounded-lg shadow-md overflow-hidden"
      >
        <Image
          src={product.image}
          alt="Product Image"
          width={300}
          height={200}
          className="mx-auto w-[40%] h-[30vh]"
        />
        <button className="absolute top-2 right-2 text-white bg-black p-2 rounded-xl bg-opacity-30">
          🤍
        </button>
        <div className="p-4">
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
            <p className="text-lg font-medium text-green-600">
              ${product.price}
            </p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-yellow-400">★★★★★</p>
          </div>
          <p className="text-sm text-gray-600 mt-3">{product.description}</p>
        </div>
        <button className="absolute bottom-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetail  ;
