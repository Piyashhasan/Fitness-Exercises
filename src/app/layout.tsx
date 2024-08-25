import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "primereact/resources/primereact.min.css";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import Nav from "@/shared/Nav/Nav";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness Exercise - Home",
  description: "Fitness Exercise app. Know about your exercise ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={josefin.className}>
        <StoreProvider>
          <Nav />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
