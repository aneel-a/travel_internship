"use client";
import React from "react";

const PaymentCompletedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-green-600">Payment Completed</h1>
      <p className="mt-4 text-xl">Thank you for your purchase!</p>
      <p className="mt-2 text-lg text-gray-600">Your order is being processed.</p>
    </div>
  );
};

export default PaymentCompletedPage;
