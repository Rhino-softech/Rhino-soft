import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-cream/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange/10 px-3 py-1 text-sm text-orange">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
              Trusted by Businesses Worldwide
            </h2>
            <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers have to say about how RhinoSoft has transformed their businesses.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-teal/20 hover:border-teal/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
              </div>
              <p className="mb-4 text-slate-500">
                "RhinoSoft's suite of business applications has completely transformed how we operate. The integration
                between products is seamless, and the analytics tools have given us insights we never had before."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-slate-500">CTO, TechInnovate</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-orange/20 hover:border-orange/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
              </div>
              <p className="mb-4 text-slate-500">
                "We've tried many software solutions over the years, but RhinoSoft stands out for its reliability,
                security, and exceptional customer support. Their team is always there when we need them."
              </p>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-slate-500">Operations Director, GlobalTrade</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-teal/20 hover:border-teal/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
                <Star className="h-5 w-5 fill-orange text-orange" />
              </div>
              <p className="mb-4 text-slate-500">
                "As a small business, we needed affordable software that could grow with us. RhinoSoft provided exactly
                that, with enterprise features at a price point that made sense for our budget."
              </p>
              <div>
                <p className="font-semibold">Priya Sharma</p>
                <p className="text-sm text-slate-500">Founder, CreativeEdge Studios</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
