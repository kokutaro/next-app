import React from 'react';

export default function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="p-2 text-xl md:text-2xl">{children}</h1>;
}
