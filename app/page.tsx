import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, CheckCircle, Headphones, Mail, MessageSquare, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FeaturesSection } from "@/components/features-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy">
                    Your business growth,
                    <br />
                    <span className="text-orange">powered by our software</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-500 md:text-xl">
                    A comprehensive suite of business applications designed to transform the way you work. Built for
                    businesses of all sizes with security and privacy at its core.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#products">
                    <Button size="lg" className="gap-1 bg-orange hover:bg-orange/90 text-white">
                      Explore Products
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-peach/30 to-orange/20"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-6">
                      <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-2 transition-transform hover:rotate-0">
                        <BarChart3 className="h-8 w-8 text-orange mb-2" />
                        <h3 className="font-bold text-navy">RhinoAnalytics</h3>
                        <p className="text-sm text-slate-500">Business intelligence made simple</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-lg transform -rotate-1 transition-transform hover:rotate-0">
                        <MessageSquare className="h-8 w-8 text-teal mb-2" />
                        <h3 className="font-bold text-navy">RhinoChat</h3>
                        <p className="text-sm text-slate-500">Team collaboration platform</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-lg transform -rotate-2 transition-transform hover:rotate-0">
                        <Mail className="h-8 w-8 text-orange mb-2" />
                        <h3 className="font-bold text-navy">RhinoMail</h3>
                        <p className="text-sm text-slate-500">Secure email for business</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-1 transition-transform hover:rotate-0">
                        <Calendar className="h-8 w-8 text-teal mb-2" />
                        <h3 className="font-bold text-navy">RhinoCalendar</h3>
                        <p className="text-sm text-slate-500">Smart scheduling solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-16 md:py-24 bg-cream/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange/10 px-3 py-1 text-sm text-orange">Our Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
                  All-in-One Business Suite
                </h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of business applications designed to streamline your operations.
                </p>
              </div>
            </div>
            <ProductsSection />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal/10 px-3 py-1 text-sm text-teal">Why RhinoSoft</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
                  Built Different
                </h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're committed to creating software that's powerful, intuitive, and secure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-orange" />
                  <h3 className="text-xl font-bold text-navy">Enterprise-Grade Security</h3>
                </div>
                <p className="text-slate-500">
                  Your data is protected with industry-leading security measures and compliance standards.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-teal" />
                  <h3 className="text-xl font-bold text-navy">Seamless Integration</h3>
                </div>
                <p className="text-slate-500">
                  All our products work together flawlessly, eliminating data silos and improving workflow.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3">
                  <Headphones className="h-6 w-6 text-orange" />
                  <h3 className="text-xl font-bold text-navy">24/7 Support</h3>
                </div>
                <p className="text-slate-500">
                  Our dedicated support team is always available to help you resolve any issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <FeaturesSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
