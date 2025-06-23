import { Cloud, Code, Database, Lock, Settings, Zap } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange/20 px-3 py-1 text-sm text-orange">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Built for Modern Businesses</h2>
            <p className="max-w-[900px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our software is designed with the latest technologies to help your business thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 hover:bg-white/5 transition-colors">
            <Cloud className="h-10 w-10 text-orange" />
            <h3 className="text-xl font-bold">Cloud-Native</h3>
            <p className="text-white/70">
              Access your data and applications from anywhere, on any device, with our cloud-based solutions.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 hover:bg-white/5 transition-colors">
            <Lock className="h-10 w-10 text-orange" />
            <h3 className="text-xl font-bold">Advanced Security</h3>
            <p className="text-white/70">
              Protect your sensitive information with enterprise-grade security features and encryption.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 hover:bg-white/5 transition-colors">
            <Settings className="h-10 w-10 text-orange" />
            <h3 className="text-xl font-bold">Customizable</h3>
            <p className="text-white/70">
              Tailor our software to meet your specific business needs with extensive customization options.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 hover:bg-white/5 transition-colors">
            <Database className="h-10 w-10 text-orange" />
            <h3 className="text-xl font-bold">Scalable</h3>
            <p className="text-white/70">
              Grow your business without worrying about outgrowing your software. Our solutions scale with you.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 hover:bg-white/5 transition-colors">
            <Zap className="h-10 w-10 text-orange" />
            <h3 className="text-xl font-bold">High Performance</h3>
            <p className="text-white/70">
              Experience lightning-fast performance with our optimized software architecture.
            </p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 hover:bg-white/5 transition-colors">
            <Code className="h-10 w-10 text-orange" />
            <h3 className="text-xl font-bold">API Integration</h3>
            <p className="text-white/70">
              Connect with your favorite tools and services through our comprehensive API ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
