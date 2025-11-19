"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

const demoEvents = [
  {
    id: 1,
    title: "Addis Music Festival 2025",
    date: "Feb 22, 2025",
    location: "Addis Ababa Stadium",
    price: "300 ETB",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "Tech Expo Ethiopia",
    date: "Mar 10, 2025",
    location: "Millennium Hall",
    price: "500 ETB",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    date: "Apr 5, 2025",
    location: "ICE Addis",
    price: "150 ETB",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=60",
  },
];

export default function EventsPage() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/events/${id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="h-40 w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <Badge variant="secondary">{event.date}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                📍 {event.location}
              </p>
              <p className="font-semibold mt-2">{event.price}</p>

              <Button
                className="mt-4 w-full"
                onClick={() => handleClick(event.id)}
              >
                View Event
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
