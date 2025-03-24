"use client"; // Ensure this component is rendered on the client side

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


const Navbar = () => {

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logotat.png" alt="logo" width={200} height={50} />
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
        <Button 
          type="button" // Add the 'type' prop here
          title="Login"
          variant="btn_dark_green"
        />
      </div>

      {/* Cart Button */}
      <div className="lg:flexCenter hidden relative">
      {/*absolute path deko kina vanda 'cart' matra use garda product kai root thanyo cuz it was inside product/[title] Relative Path Issue: If you were to use href="cart", Next.js would treat it as a relative path, which would result in /product/cart, and that’s why you were seeing the 404 error.*/}
        <Link href="/cart"> 
        <Button 
          type="button" // Add the 'type' prop here
          title="Cart"
          variant="btn_dark_green"
        />        
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
