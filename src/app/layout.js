import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heroPosterUrl =
  "https://res.cloudinary.com/dsjuc7wd5/video/upload/so_0,q_auto,w_1600,c_limit/v1780930461/dnp_annnug.jpg";
const heroMobilePosterUrl =
  "https://res.cloudinary.com/dsjuc7wd5/video/upload/so_0,q_auto,w_960,c_limit/v1780930461/dnp_annnug.jpg";

export const metadata = {
  title: "DNP Logistic | Reliable Logistics Solutions",
  description: "Your Cargo, Our Commitment",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preload" as="image" href={heroMobilePosterUrl} media="(max-width: 767px)" />
        <link rel="preload" as="image" href={heroPosterUrl} media="(min-width: 768px)" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
