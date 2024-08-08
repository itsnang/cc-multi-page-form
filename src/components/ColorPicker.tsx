'use client';
import React from 'react';
import { ColorButton } from './ColorButton';

interface Colors {
  title: string;
  color: string;
}

interface ColorPickerProps {
  colors: Colors[];
  inActive?: boolean;
  onSelect: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  onSelect,
  colors,
  inActive,
}) => {
  const [selectedColor, setSelectedColor] = React.useState<string>('');

  return (
    <div>
      <label htmlFor="hello">Color</label>
      <div className="flex gap-6">
        {colors.map((item) => (
          <ColorButton
            key={item.color}
            colors={item.color}
            onClick={() => {
              setSelectedColor(item.color);
              onSelect(item.color);
            }}
            isActive={selectedColor === item.color}
          />
        ))}
      </div>
    </div>
  );
};
