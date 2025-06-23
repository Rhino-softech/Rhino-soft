import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, FileText, Mail, MessageSquare, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-teal/20 hover:border-teal/50 transition-colors overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-teal/10 p-6">
            <BarChart3 className="h-10 w-10 text-teal mb-4" />
            <h3 className="text-xl font-bold text-navy">Rhino Review</h3>
            <p className="text-slate-500 mt-2">
              Generate positive reviews, respond to negative feedback, and grow your business.
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Interactive dashboards</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Real-time reporting</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Custom data visualization</span>
              </li>
            </ul>
  <Link 
              href="https://rhino-reviews-rhinosoftechs-projects.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >           
    <Button variant="ghost" className="w-full justify-between text-teal hover:text-teal hover:bg-teal/10">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange/20 hover:border-orange/50 transition-colors overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-orange/10 p-6">
            <MessageSquare className="h-10 w-10 text-orange mb-4" />
            <h3 className="text-xl font-bold text-navy">RhinoChat</h3>
            <p className="text-slate-500 mt-2">
              Streamline team communication and collaboration with our secure messaging platform.
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Team channels & direct messages</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>File sharing & search</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Video conferencing</span>
              </li>
            </ul>
            <Link href="/products/chat">
              <Button
                variant="ghost"
                className="w-full justify-between text-orange hover:text-orange hover:bg-orange/10"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal/20 hover:border-teal/50 transition-colors overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-teal/10 p-6">
            <Mail className="h-10 w-10 text-teal mb-4" />
            <h3 className="text-xl font-bold text-navy">RhinoMail</h3>
            <p className="text-slate-500 mt-2">
              Secure, professional email hosting with advanced collaboration features.
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Custom domain emails</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Advanced spam protection</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Integrated calendar</span>
              </li>
            </ul>
            <Link href="/products/mail">
              <Button variant="ghost" className="w-full justify-between text-teal hover:text-teal hover:bg-teal/10">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange/20 hover:border-orange/50 transition-colors overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-orange/10 p-6">
            <Users className="h-10 w-10 text-orange mb-4" />
            <h3 className="text-xl font-bold text-navy">RhinoCRM</h3>
            <p className="text-slate-500 mt-2">
              Manage customer relationships and drive sales with our intuitive CRM solution.
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Contact management</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Sales pipeline tracking</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Email marketing tools</span>
              </li>
            </ul>
            <Link href="/products/crm">
              <Button
                variant="ghost"
                className="w-full justify-between text-orange hover:text-orange hover:bg-orange/10"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-teal/20 hover:border-teal/50 transition-colors overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-teal/10 p-6">
            <Calendar className="h-10 w-10 text-teal mb-4" />
            <h3 className="text-xl font-bold text-navy">RhinoCalendar</h3>
            <p className="text-slate-500 mt-2">Smart scheduling and calendar management for teams and individuals.</p>
          </div>
          <div className="p-6">
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Meeting scheduling</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Resource booking</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Availability sharing</span>
              </li>
            </ul>
            <Link href="/products/calendar">
              <Button variant="ghost" className="w-full justify-between text-teal hover:text-teal hover:bg-teal/10">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange/20 hover:border-orange/50 transition-colors overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-orange/10 p-6">
            <FileText className="h-10 w-10 text-orange mb-4" />
            <h3 className="text-xl font-bold text-navy">RhinoDocs</h3>
            <p className="text-slate-500 mt-2">
              Create, edit, and collaborate on documents in real-time with your team.
            </p>
          </div>
          <div className="p-6">
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Real-time collaboration</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Version history</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-orange" />
                <span>Document templates</span>
              </li>
            </ul>
            <Link href="/products/docs">
              <Button
                variant="ghost"
                className="w-full justify-between text-orange hover:text-orange hover:bg-orange/10"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
