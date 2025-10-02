import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangSwitch, Navigation } from "./lang-switch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soichiro IMAMURA's homepage",
  description: "Personal website of Soichiro IMAMURA",
  verification: {
    google: "pGvbudkhc59oa5OILYUiNiBo0Jg1zM8l4-Osk-miOzM",
  },
  alternates: {
    canonical: "https://soichiro524.github.io/",
    languages: {
      "en": "https://soichiro524.github.io/en/about",
      "ja": "https://soichiro524.github.io/ja/about",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          {/* <div className="site-header__container"> */}
          <LangSwitch />
              <h1>Welcome to Soichiro IMAMURA&apos;s homepage!</h1>
              {/* <p>Researcher in Computer Science</p> */}
            <Navigation />
          {/* </div> */}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* <div>
            <p>© 2023 Soichiro Imamura</p>
            <p>Last updated: 2023-10-01</p>
          </div> */}
          </footer>
      </body>
    </html>
  );
}
