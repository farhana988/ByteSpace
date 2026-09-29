import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const satoshi = localFont({
  src: "./../../fonts/Satoshi-Light.otf",
  variable: "--font-satoshi",
});
const clashDisplay = localFont({
  src: "./../../fonts/ClashDisplay-Bold.ttf",
  variable: "--font-clash",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byte Space",
  description:
    "Learn new skills, grow your career, and explore hundreds of expert-led courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        satoshi.variable,
        clashDisplay.variable,
        poppins.variable,
        geistSans.variable,
        geistMono.variable,
        poppins.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
