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
  title: "სოფიო ბერძენიშვილი - ადვოკატი თბილისში | Advokati",
   description: "პროფესიონალი ადვოკატი თბილისში (advokati Tbilisi) - სამართლებრივი დახმარება საოჯახო, მემკვიდრეობით, გაშორების და სისხლის სამართლის საქმეებში. სოფიო ბერძენიშვილი და პარტნიორები თქვენს სამსახურში.",
  icons: {
    icon: "/advokati-Logo.png",
  },
  keywords:  "ადვოკატი თბილისში, იურიდიული დახმარება, იურიდიული კონსულტაცია, იურისტი თბილისში, საადვოკატო ბიურო, საოჯახო სამართლის ადვოკატი, გაშორება, მემკვიდრეობა, სასამართლოს დაცვა, საუკეთესო ადვოკატი, იურისტის რჩევა, იურიდიული კომპანია, სისხლის სამართლის ადვოკატი, advokati, iuristi, advokati tbilisi, sofo berdzenishvili",
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
