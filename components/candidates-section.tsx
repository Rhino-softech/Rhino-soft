import { Award, BookOpen, BriefcaseBusiness, Clock, Lightbulb, Users } from "lucide-react"

export function CandidatesSection() {
  return (
    <section id="candidates" className="py-16 md:py-24 bg-cream/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Our Candidates</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Highly Trained IT Professionals
            </h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our candidates from Network Rhinos are thoroughly trained and ready to contribute to your organization
              from day one.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-orange" />
              <h3 className="text-xl font-bold text-navy">Comprehensive Training</h3>
            </div>
            <p className="text-slate-500">
              Our candidates undergo rigorous training programs designed to develop both theoretical knowledge and
              practical skills.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-teal-500" />
              <h3 className="text-xl font-bold text-navy">Industry Certifications</h3>
            </div>
            <p className="text-slate-500">
              All our professionals hold relevant industry certifications that validate their expertise and
              capabilities.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-orange" />
              <h3 className="text-xl font-bold text-navy">Practical Experience</h3>
            </div>
            <p className="text-slate-500">
              Candidates gain hands-on experience through real-world projects and simulations during their training.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-teal-500" />
              <h3 className="text-xl font-bold text-navy">Problem-Solving Skills</h3>
            </div>
            <p className="text-slate-500">
              Our professionals are trained to think critically and solve complex technical challenges efficiently.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-orange" />
              <h3 className="text-xl font-bold text-navy">Team Collaboration</h3>
            </div>
            <p className="text-slate-500">
              Candidates are prepared to work effectively in team environments and communicate with technical and
              non-technical stakeholders.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-teal-500" />
              <h3 className="text-xl font-bold text-navy">Continuous Learning</h3>
            </div>
            <p className="text-slate-500">
              Our professionals are committed to ongoing education to stay current with evolving technologies and
              industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
