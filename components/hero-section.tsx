import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connecting IT Talent with Industry Leaders
              </h1>
              <p className="max-w-[600px] text-slate-500 md:text-xl">
                RhinoSoft bridges the gap between skilled IT professionals and leading companies. We specialize in
                placing candidates trained in CCNA, CCNP, AWS, DevOps, and Cybersecurity.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button size="lg" className="gap-1 bg-orange hover:bg-orange/90 text-white">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-teal/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-peach/30 to-orange/20"></div>
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex items-center justify-center rounded-full bg-orange px-3 py-1 text-sm text-white mb-4">
                  IT Consultancy
                </div>
                <h2 className="text-2xl font-bold mb-2">RhinoSoft</h2>
                <p className="text-slate-700 mb-6">Your Partner in IT Talent Acquisition</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-navy">CCNA</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-navy">CCNP</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-navy">AWS</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-navy">DevOps</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-navy">Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
