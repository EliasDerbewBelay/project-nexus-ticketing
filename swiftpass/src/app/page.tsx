import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Ticket, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
              🎉 Professional Event Ticketing Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Seamless Event
              <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Ticketing
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Manage events, sell tickets, and deliver exceptional experiences
              with SwiftPass - the modern ticketing solution for organizers and
              attendees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {[
            {
              icon: Calendar,
              title: "Event Management",
              desc: "Create and manage events with ease",
            },
            {
              icon: Ticket,
              title: "Digital Tickets",
              desc: "QR-based tickets for secure entry",
            },
            {
              icon: Users,
              title: "Audience Insights",
              desc: "Understand your attendees better",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
