import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import NavBar from "@/components/common/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata = {
  title: "Portfolio",
  description: "About Riwaz Thapa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ThemeProvider>
          <NavBar />
          <main className="px-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
