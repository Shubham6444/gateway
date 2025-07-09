"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { fetchUserInfo } from "@/services/gateway/user"

export default function Header() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUserInfo()
      setUser(userData)
    }
    loadUser()
  }, [])

  return (
    <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HostPro
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Pricing", "Docs", "Support"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors font-medium relative group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Auth / Username */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="text-white/80 font-medium">👋 Hi, {user.username}</div>
            ) : (
              <>
                <Link href="/login" className="text-white/80 hover:text-white transition-colors font-medium">
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 font-medium"
                >
                  Start Free
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
