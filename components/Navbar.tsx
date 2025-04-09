"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount(); // Load initial cart count
    window.addEventListener("cartUpdated", updateCartCount); // Listen for updates

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount); // Cleanup
    };
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logotat.jpg" alt="logo" width={200} height={50} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 lg:text-xs xl:text-lg text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" variant="btn_dark_green" />
      </div>

      {/* Cart Button with Live Count */}
      <div className="lg:flexCenter hidden relative">
        <Link href="/cart">
          <Button type="button" title={`Cart (${cartCount})`} variant="btn_dark_green" />
        </Link>
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
