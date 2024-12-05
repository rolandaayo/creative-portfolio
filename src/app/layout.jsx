import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BuyMore - Fashion E-commerce",
  description: "Discover the latest fashion trends and shop your favorite styles",
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>)
  );
}

