import { Header } from '@/components/Header';
import React from 'react';

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-full">
      <Header />
      <div className="mb-28 flex flex-col gap-x-16">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
