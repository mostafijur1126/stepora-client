"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Category", href: "/category" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const CartButton = () => (
  <Link href="/cart" aria-label="Cart" className="relative">
    <FiShoppingBag className="text-2xl" />
    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-button text-[10px] font-medium text-button-text">
      1
    </span>
  </Link>
);

const Logo = () => (
  <Link
    href="/"
    className="text-2xl font-light uppercase tracking-[0.3em] text-button-text"
  >
    Stepora
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-border bg-background">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-8 px-6 py-3 md:flex">
        <Logo />

        <div className="flex w-full max-w-xl items-center rounded-sm bg-muted px-4 py-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-foreground"
          />
          <button aria-label="Search">
            <FiSearch className="text-xl" />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/wishlist" aria-label="Wishlist">
            <FiHeart className="text-2xl" />
          </Link>
          <Link href="/account" aria-label="Account">
            <FiUser className="text-2xl" />
          </Link>
          <CartButton />
        </div>
      </div>

      <nav className="hidden border-t border-border md:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-muted-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="grid grid-cols-3 items-center px-4 py-4 md:hidden">
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
          <Link href="/wishlist" aria-label="Wishlist">
            <FiHeart className="text-2xl" />
          </Link>
        </div>

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link href="/search" aria-label="Search">
            <FiSearch className="text-2xl" />
          </Link>
          <CartButton />
        </div>
      </div>

      {open && (
        <nav className="border-t border-border md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
