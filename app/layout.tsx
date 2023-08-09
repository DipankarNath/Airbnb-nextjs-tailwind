import { Nunito } from 'next/font/google';
import React from 'react';

import Navbar from './components/navbar/Navbar';
import './globals.css'
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal isOpen/>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
