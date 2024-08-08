import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <header className="fix top-0 z-50 w-full h-[60px] flex items-center justify-between px-4 py-3 bg-[#F6A000]">
      <div className="flex items-center">
        <span className="tracking-tight font-medium text-[24px] px-4 relative">
          <Image
            src={'/cclogo.png'}
            alt={'logo'}
            height={52}
            width={132.5}
            priority
            className="h-10 w-auto sm:h-auto sm:max-h-[3.25rem]"
          />
        </span>
      </div>

      <div className="flex items-center"></div>
    </header>
  );
};
