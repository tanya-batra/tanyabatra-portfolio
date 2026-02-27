import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Tanya Batra | PHP & Laravel Developer",
    template: "%s | Tanya Batra",
  },
  description:
    "Tanya Batra is a Laravel Developer with 1.5+ years of experience at Buildupnet. Skilled in Laravel, PHP, REST APIs, MySQL, and production-ready web applications. Worked on live projects including e-commerce and salon management systems. Open to freelance and remote roles.",
  keywords: [
    "Tanya Batra",
    "Laravel Developer",
    "PHP Developer",
    "Full Stack PHP Developer",
    "Laravel Freelance Developer",
    "Remote PHP Developer",
    "Laravel REST API Developer",
    "MySQL Developer",
    "Buildupnet Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Tanya Batra" }],
  creator: "Tanya Batra",
  metadataBase: new URL("https://tanyabatra-portfolio.vercel.app"), // replace with your live domain
  alternates: {
    canonical: "https://tanyabatra-portfolio.vercel.app",
  },
  openGraph: {
    title: "Tanya Batra | Laravel Developer & PHP Engineer",
    description:
      "Laravel Developer with 1.5+ years of experience at Buildupnet. Built production-ready platforms including e-commerce and salon management systems.",
    url: "https://tanyabatra-portfolio.vercel.app",
    siteName: "Tanya Batra Portfolio",
    images: [
      {
        url: "https://tanyabatra-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanya Batra - Laravel Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanya Batra | Laravel Developer",
    description:
      "Laravel & PHP Developer with real-world production experience. Open to freelance and remote roles.",
    images: ["https://tanyabatra-portfolio.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global Header with Logo */}
        <header className="p-4 flex items-center gap-4 shadow-md">
          <Image
            src="/logo.png"
            alt="Tanya Batra Logo"
            width={60}
            height={60}
            priority
          />
          <span className="text-xl font-semibold">Tanya Batra</span>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Global Toaster Notifications */}
        <Toaster />
      </body>
    </html>
  );
}