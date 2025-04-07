"use client";
import React, { useState, useEffect } from "react";
import NotFound from "../../not-found";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
};

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const notify = () => toast.success('Added to cart!', { position: "bottom-right", theme: "dark" });

  useEffect(() => {
    const fetchProductData = () => {
      if (!params.title) return;
      
      // Get products from localStorage instead of API
      const storedProducts = localStorage.getItem("products");
      if (!storedProducts) return;
      
      const products = JSON.parse(storedProducts);
      const foundProduct = products.find((product: any) => 
        generateSlug(product.name) === params.title
      );
      
      setProduct(foundProduct);
    };
    
    fetchProductData();
  }, [params.title]);

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push({
        title: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        // Add a default image or leave it empty
        image: product.imageUrl // You should add this image to your public folder
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      notify();
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          {/* Updated to use placeholder image since your admin form doesn't include images */}
          <Image 
            src={product.imageUrl || "/placeholder-product.png"}
            alt={product.name} 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg" 
          />
        </div>
        <div className="md:w-1/2 w-full md:pl-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-sm text-gray-600 mb-4">{product.category}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">${product.price}</p>
          <button
            onClick={addToCart} 
            className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}