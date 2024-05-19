import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calvin's Web Portfolio",
  description: "Used for storing projects and personal information.",
  icons: [
    {
      url: "./favicon.ico",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="./favicon.ico" />
        {children}
      </body>
    </html>
  );
}
