import Link from 'next/link';
import React from 'react';

interface InfoItemProps {
  icon: string;
  firstRowText: string;
  secondRowText: string;
  linkText: string;
  link: string;
  afterImage?: string; // Optional prop for the image URL to use in ::after
}

function InfoItem({ 
  icon, 
  firstRowText, 
  secondRowText, 
  linkText, 
  link, 
  afterImage 
}: InfoItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center basis-full sm:basis-1/2 lg:basis-1/3 p-4">
      <img 
        width={48} 
        height={48} 
        src={icon} 
        alt="icon" 
        className="w-12 h-12 md:w-16 md:h-16"
      />
      <h3
        className="text-[20px] sm:text-[22px] md:text-[20px] font-semibold tracking-[0.07px] leading-[24px] md:leading-[32px] px-4"
      >
        {firstRowText}
        <br />
        {secondRowText}
      </h3>
      <Link 
        href={link}
        className="text-blue-500 hover:text-blue-700 text-sm md:text-base inline-flex items-center"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {linkText}
        {afterImage && (
          <span
            style={{
              backgroundImage: `url(${afterImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'inline-block',
              width: '18px',
              height: '18px',
              marginLeft: '8px',
            }}
          />
        )}
      </Link>
    </div>
  );
}

export default InfoItem;