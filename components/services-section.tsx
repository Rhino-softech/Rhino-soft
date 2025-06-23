import { Cloud, Database, Lock, Network, Server, Settings } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Specialized IT Talent Solutions
            </h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We connect companies with skilled professionals trained in various IT domains from Network Rhinos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-teal/20 p-6 hover:border-teal/50 transition-colors">
            <div className="rounded-full bg-orange/10 p-4">
              <Network className="h-6 w-6 text-orange" />
            </div>
            <h3 className="text-xl font-bold text-navy">CCNA Professionals</h3>
            <p className="text-center text-slate-500">
              Certified network associates skilled in implementing and supporting Cisco networking solutions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-teal/20 p-6 hover:border-teal/50 transition-colors">
            <div className="rounded-full bg-teal/10 p-4">
              <Server className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-xl font-bold text-navy">CCNP Experts</h3>
            <p className="text-center text-slate-500">
              Advanced network professionals capable of planning, implementing, and troubleshooting complex networks.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-teal/20 p-6 hover:border-teal/50 transition-colors">
            <div className="rounded-full bg-orange/10 p-4">
              <Cloud className="h-6 w-6 text-orange" />
            </div>
            <h3 className="text-xl font-bold text-navy">AWS Specialists</h3>
            <p className="text-center text-slate-500">
              Cloud computing experts proficient in designing, deploying, and managing AWS infrastructure.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-teal/20 p-6 hover:border-teal/50 transition-colors">
            <div className="rounded-full bg-teal/10 p-4">
              <Settings className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-xl font-bold text-navy">DevOps Engineers</h3>
            <p className="text-center text-slate-500">
              Professionals skilled in automating and optimizing development and operations processes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-teal/20 p-6 hover:border-teal/50 transition-colors">
            <div className="rounded-full bg-orange/10 p-4">
              <Lock className="h-6 w-6 text-orange" />
            </div>
            <h3 className="text-xl font-bold text-navy">Cybersecurity Experts</h3>
            <p className="text-center text-slate-500">
              Security specialists trained to protect systems and networks from digital threats and attacks.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-teal/20 p-6 hover:border-teal/50 transition-colors">
            <div className="rounded-full bg-teal/10 p-4">
              <Database className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-xl font-bold text-navy">Custom IT Solutions</h3>
            <p className="text-center text-slate-500">
              Tailored IT staffing solutions to meet your specific business requirements and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
