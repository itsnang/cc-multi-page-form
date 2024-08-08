'use client';

import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import MyInput from '../components/MyInput';
import { ColorPicker } from '@/components/ColorPicker';

interface Colors {
  title: string;
  color: string;
}

interface StepOneFormProps {
  colors: Colors[];
}

export default function StepOneForm({ colors }: StepOneFormProps) {
  return (
    <ColorPicker colors={colors} onSelect={(color) => console.log(color)} />
  );
}
