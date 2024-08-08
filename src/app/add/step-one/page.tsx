import React from 'react';
import StepOneForm from './StepOneForm';

const COLORS = [
  {
    title: 'Black',
    color: '#000000',
  },
  {
    title: 'Puple',
    color: '#E9D5EC',
  },
];

export default async function page() {
  return (
    <div>
      <StepOneForm colors={COLORS} />
    </div>
  );
}
