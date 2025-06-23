import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-navy text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-bold">
              Rhino<span className="text-orange">Soft</span>
            </h3>
            <p className="text-white/70">
              Empowering businesses with innovative software solutions that drive growth and efficiency.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-orange">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-orange">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-orange">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-orange">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/analytics" className="text-white/70 hover:text-orange">
                  RhinoAnalytics
                </Link>
              </li>
              <li>
                <Link href="/products/chat" className="text-white/70 hover:text-orange">
                  RhinoChat
                </Link>
              </li>
              <li>
                <Link href="/products/mail" className="text-white/70 hover:text-orange">
                  RhinoMail
                </Link>
              </li>
              <li>
                <Link href="/products/crm" className="text-white/70 hover:text-orange">
                  RhinoCRM
                </Link>
              </li>
              <li>
                <Link href="/products/calendar" className="text-white/70 hover:text-orange">
                  RhinoCalendar
                </Link>
              </li>
              <li>
                <Link href="/products/docs" className="text-white/70 hover:text-orange">
                  RhinoDocs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-orange">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-orange">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-white/70 hover:text-orange">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-orange">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-white/70 hover:text-orange">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-white/70 hover:text-orange">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-white/70 hover:text-orange">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-white/70 hover:text-orange">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/70 hover:text-orange">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50">© {new Date().getFullYear()} RhinoSoft. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-white/70 hover:text-orange text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-orange text-sm">
                Terms of Service
              </Link>
              <Link href="/security" className="text-white/70 hover:text-orange text-sm">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
