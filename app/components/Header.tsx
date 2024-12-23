"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // Import the CSS module

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Menstrual Cycle",
      categories: [
        "Mind, mood & emotions",
        "Your Vagina",
        "Puberty",
        "Skin & Hair",
        "Diet & Exercise",
        "Bleeding",
        "Miscarriage",
        "Anatomy",
        "Reviews",
        "Products",
        "Periods",
        "Menopause and Perimenopause",
      ],
    },
    {
      label: "Birth Control",
      categories: [
        "Hormones & Your Cycle",
        "Hormonal Birth Control",
        "Abortion",
        "Non-Hormonal Birth Control",
      ],
    },
    {
      label: "Fertility",
      categories: ["Pregnancy, Birth & Postpartum", "Trying to Conceive"],
    },
    {
      label: "Issues & Conditions",
      categories: [
        "Bleeding disorders",
        "Cramps & Pain",
        "PMS & PMDD",
        "Endometriosis",
        "COVID-19",
        "PCOS",
      ],
    },
    {
      label: "Sex",
      categories: ["Pleasure", "STIs", "Dating & Partnership"],
    },
    {
      label: "Life & Culture",
      categories: ["LGBTQIA+", "Gender Equality", "Race", "Society"],
    },
    {
      label: "About CycleGrove",
      categories: ["Events", "How to Use CycleGrove"],
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.svg" alt="CycleGrove Logo" />
        </Link>

        <nav className={styles.menu}>
          {menuItems.map((menu) => (
            <div
              key={menu.label}
              className={styles.menuItem}
              onMouseEnter={() => setHoveredMenu(menu.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <span>{menu.label}</span>
              {hoveredMenu === menu.label && (
                <div className={styles.dropdown}>
                  {menu.categories.map((category, index) => (
                    <Link href="#" key={index} className={styles.dropdownItem}>
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/sign-in" className={styles.signIn}>
            Sign in
          </Link>
          {/* <button className={styles.ctaButton}>Clue Plus</button> */}
        </div>
      </div>
    </header>
  );
}
