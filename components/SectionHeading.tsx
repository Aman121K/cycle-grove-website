import React from 'react'
interface SectionHeadingProps {
    children: React.ReactNode;
    className?: string;
  }

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-[32px] my-16 font-bold tracking-[0.416px] leading-[48px] text-center sm:text-[28px] sm:leading-[42px] ${className}`}
    >
      {children}
    </h2>
  );
}
