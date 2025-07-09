"use client"

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {
  const pathname = usePathname()

  // Don't show header/footer on dashboard pages
  const isDashboard = pathname.startsWith("/dashboard")

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {!isDashboard && <Header />}
        <main className="flex-grow">{children}</main>
        {!isDashboard && <Footer />}
      </body>
    </html>
  )
}
