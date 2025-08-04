import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import {
  Inter,
  Roboto,
  Open_Sans,
  Poppins,
  Lato,
  Nunito,
  Montserrat,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ThemeCN - Beautiful Shadcn/UI Themes Generator",
  description:
    "Generate and customize beautiful themes for your Next.js projects using Shadcn/UI components. Export CSS with one click.",
  keywords: [
    "Shadcn/UI",
    "Next.js",
    "Theme generator",
    "CSS variables",
    "Tailwind CSS",
    "React components",
    "UI themes",
    "Frontend development",
    "Web design",
    "AI theme generator",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto.variable} ${openSans.variable} ${poppins.variable} ${lato.variable} ${nunito.variable} ${montserrat.variable}`}
    >
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
