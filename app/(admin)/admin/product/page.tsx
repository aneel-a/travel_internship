"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  category: string;
  description: string;
  imageUrl: string;
};

const ProductPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>("priceLowToHigh"); // state for sorting option
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load products from localStorage
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Function to handle sorting
  const handleSort = (option: string) => {
    let sortedProducts = [...products];

    if (option === "priceLowToHigh") {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (option === "priceHighToLow") {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setProducts(sortedProducts);
    setSortOption(option);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      productName.trim() &&
      price.trim() &&
      category.trim() &&
      description.trim()
    ) {
      let imageUrl = "/default-product.jpg"; // Default image

      // In a real app, you would upload the image to a server here
      // For this example, we'll just use the preview URL for new images
      // and keep the existing URL for edits if no new image is selected
      if (imageFile) {
        imageUrl = imagePreview || "/default-product.jpg";
      } else if (editingIndex !== null) {
        imageUrl = products[editingIndex].imageUrl;
      }

      const newProduct = {
        name: productName,
        price,
        category,
        description,
        imageUrl,
      };

      let updatedProducts;
      if (editingIndex !== null) {
        // Update existing product
        updatedProducts = [...products];
        updatedProducts[editingIndex] = newProduct;
      } else {
        // Add new product
        updatedProducts = [...products, newProduct];
      }

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      resetForm();
      setShowForm(false);
    }
  };

  const resetForm = () => {
    setProductName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImageFile(null);
    setImagePreview(null);
    setEditingIndex(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  const handleDelete = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEdit = (index: number) => {
    const productToEdit = products[index];
    setProductName(productToEdit.name);
    setPrice(productToEdit.price);
    setCategory(productToEdit.category);
    setDescription(productToEdit.description);
    setImagePreview(productToEdit.imageUrl);
    setEditingIndex(index);
    setShowForm(true);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100 relative">
      <h1 className="text-black text-2xl mb-4">Product Page</h1>

      <button
        onClick={() => {
          resetForm();
          setShowForm(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create
      </button>

      {/* Sort By Dropdown */}
      <div className="mt-4">
        <label className="mr-2">Sort By:</label>
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product List with Images */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Product List</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <div className="relative h-48 mb-3">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span>No Image</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-green-600">${product.price}</p>
                <p className="text-sm text-gray-500">
                  Category: {product.category}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products added yet.</p>
        )}
      </div>

      {/* Form with Image Upload */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-6 transform ${
          showForm ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
          onClick={handleCancel}
        >
          ×
        </button>

        <h3 className="text-lg font-semibold mb-3">
          {editingIndex !== null ? "Edit Product" : "Create Product"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          <div>
            <label className="block">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          <div>
            <label className="block">Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          <div>
            <label className="block">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full rounded-md h-20"
              required
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label className="block">Product Image:</label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={triggerFileInput}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md w-full"
            >
              Choose Image
            </button>
            {(imagePreview || (editingIndex !== null && !imageFile)) && (
              <div className="mt-4">
                <div className="relative h-48 w-full border rounded-md overflow-hidden">
                  <Image
                    src={imagePreview || products[editingIndex!].imageUrl}
                    alt="Preview"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/default-product.jpg";
                    }}
                  />
                </div>
                {imageFile && (
                  <p className="text-sm text-gray-500 mt-1">
                    {imageFile.name} ({(imageFile.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              {editingIndex !== null ? "Update" : "Submit"}
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleCancel}
            >
              Cancelled
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
