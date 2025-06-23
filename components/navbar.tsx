"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Search, X, BarChart3, MessageSquare, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-navy">
              Rhino<span className="text-orange">Soft</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-orange">
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="w-64 rounded-md bg-white p-4 shadow-lg ring-1 ring-black/5">
                <div className="grid gap-4">
                  <Link href="/products/analytics" className="flex items-start gap-3 rounded-md p-2 hover:bg-slate-100">
                    <BarChart3 className="mt-1 h-5 w-5 text-orange" />
                    <div>
                      <div className="font-medium text-navy">Rhino Review</div>
                      <div className="text-xs text-slate-500">Business intelligence platform</div>
                    </div>
                  </Link>
                  <Link href="/products/chat" className="flex items-start gap-3 rounded-md p-2 hover:bg-slate-100">
                    <MessageSquare className="mt-1 h-5 w-5 text-teal" />
                    <div>
                      <div className="font-medium text-navy">RhinoChat</div>
                      <div className="text-xs text-slate-500">Team collaboration platform</div>
                    </div>
                  </Link>
                  <Link href="/products/mail" className="flex items-start gap-3 rounded-md p-2 hover:bg-slate-100">
                    <Mail className="mt-1 h-5 w-5 text-orange" />
                    <div>
                      <div className="font-medium text-navy">RhinoMail</div>
                      <div className="text-xs text-slate-500">Secure email for business</div>
                    </div>
                  </Link>
                </div>
                <div className="mt-4 border-t pt-4">
                  <Link href="/products" className="text-xs font-medium text-orange hover:underline">
                    View all products
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/solutions" className="text-sm font-medium text-slate-700 transition-colors hover:text-orange">
            Solutions
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-700 transition-colors hover:text-orange">
            Pricing
          </Link>
          <Link href="/customers" className="text-sm font-medium text-slate-700 transition-colors hover:text-orange">
            Customers
          </Link>
          <Link href="/resources" className="text-sm font-medium text-slate-700 transition-colors hover:text-orange">
            Resources
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pr-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <button onClick={() => setIsSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-slate-500" />
              </button>
            </div>
          ) : (
            <button onClick={() => setIsSearchOpen(true)} className="text-slate-700 hover:text-orange">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
          )}
          <Link href="/login">
            <Button variant="ghost" className="text-slate-700 hover:text-orange hover:bg-orange/10">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-orange hover:bg-orange/90 text-white">Sign Up Free</Button>
          </Link>
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-500 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 pb-6">
            <Link
              href="/products"
              className="flex items-center justify-between text-sm font-medium text-slate-700 transition-colors hover:text-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/customers"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center bg-orange hover:bg-orange/90 text-white">Sign Up Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
