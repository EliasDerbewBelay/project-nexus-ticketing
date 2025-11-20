"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Ticket } from "lucide-react";

const demoEvents = [
  {
    id: 1,
    title: "Addis Music Festival 2025",
    date: "Feb 22, 2025",
    location: "Addis Ababa Stadium",
    price: "300 ETB",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&q=60",
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Expo Ethiopia",
    date: "Mar 10, 2025",
    location: "Millennium Hall",
    price: "500 ETB",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=60",
    category: "Technology",
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    date: "Apr 5, 2025",
    location: "ICE Addis",
    price: "150 ETB",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=60",
    category: "Business",
  },
];

export default function EventsPage() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/events/${id}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Discover and manage your events</p>
        </div>
        <Button className="gap-2">
          <Calendar className="w-4 h-4" />
          Create Event
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoEvents.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white group cursor-pointer"
            onClick={() => handleClick(event.id)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white/90 backdrop-blur-sm">
                {event.category}
              </Badge>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                {event.title}
              </CardTitle>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-gray-900">
                    {event.price}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
