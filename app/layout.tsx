import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Nhan Van Education",
  description: "IELTS preparation platform for Vietnamese learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={beVietnamPro.className + " antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
