"use client";

import React, { useState } from "react";
import { menuItems } from "../data/data";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <header className="bg-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-xl font-bold textPrimary">CycleGrove</div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}  
              >
                <button
                  className="textPrimary hover:text-textPink font-semibold"
                >
                  {item.label}
                </button>
                {dropdownOpen === index && (
                  <ul onMouseLeave={handleMouseLeave} className="absolute left-0 top-10 bg-secondary shadow-lg rounded-lg w-64 z-10">
                    {item.categories.map((category) => (
                      <li key={category} className="p-3 hover:bg-textPink">
                        <a href="#" className="block textPrimary">
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownIndex(index === dropdownIndex ? null : index);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="textPrimary focus:outline-none"
      >
        ☰
      </button>
      {open && (
        <ul className="absolute left-0 top-12 bg-secondary w-full shadow-lg z-10">
          {menuItems.map((item, index) => (
            <li key={item.label} className="border-b border-accent">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left p-3 font-semibold textPrimary hover:bg-accent"
              >
                {item.label}
              </button>
              {dropdownIndex === index && (
                <ul className="bg-accent">
                  {item.categories.map((category) => (
                    <li key={category} className="pl-6 pr-3 py-2">
                      <a href="#" className="block textPrimary">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
