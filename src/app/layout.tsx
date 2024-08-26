import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./globals.css";
import "../styles/app.scss";
import StoreProvider from "./StoreProvider";
import NavBar from "@/shared/NavBar/NavBar";

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
          <NavBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
