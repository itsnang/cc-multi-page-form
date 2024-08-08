import React from 'react';

interface ColorButtonProps {
  colors: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const ColorButton: React.FC<ColorButtonProps> = ({
  colors,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`h-10 w-10 ${isActive ? 'border-[5px]' : ''} rounded-full`}
      style={{ backgroundColor: colors }}
      onClick={onClick}
    ></button>
  );
};
