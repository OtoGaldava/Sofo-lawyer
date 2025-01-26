import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/header/header";
import Bottom from "./Components/bottom/bottom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "სოფიო ბერძენიშვილი - საადვოკატო ბიურო",
  description: "ადვოკატი სოფო ბერძენიშვილი გთავაზობთ მაღალკვალიფიციურ, სწრაფ და ხარისხიან იურიდიულ მომსახურებას.",
  icons: './logo.jpg',
  keywords: 'ადვოკატი, ადვოკატის მომსახურება, ადვოკატურა, იურისტი, იურიდიული კომპანია, საადვოკატო ბიურო, იურიდიული მომსახურება, იურისტის კონსულტაცია',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header></Header>
        {children}
        <Bottom></Bottom>
      </body>
    </html>
  );
}
