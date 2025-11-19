"use client";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { events } from "@/data/events";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EventDetailsPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const router = useRouter();

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return <p className="p-6 text-red-500">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="w-full h-64 relative rounded-xl overflow-hidden shadow">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mt-6">{event.title}</h1>
      <p className="text-lg text-gray-600 mt-2">{event.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded-xl shadow-sm flex items-center gap-3">
          <Calendar />
          <div>
            <p className="font-bold">Date</p>
            <p className="text-gray-600">{event.date}</p>
          </div>
        </div>

        <div className="p-4 border rounded-xl shadow-sm flex items-center gap-3">
          <Clock />
          <div>
            <p className="font-bold">Time</p>
            <p className="text-gray-600">{event.time}</p>
          </div>
        </div>

        <div className="p-4 border rounded-xl shadow-sm flex items-center gap-3">
          <MapPin />
          <div>
            <p className="font-bold">Location</p>
            <p className="text-gray-600">{event.location}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 border rounded-xl shadow flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">Price</p>
          <p className="text-gray-600 text-lg">{event.price}</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2">
              <Ticket size={18} />
              Buy Ticket
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Select Ticket Type</DialogTitle>
            </DialogHeader>

            {/* Ticket Types */}
            <div className="space-y-3 mt-4">
              {event.tickets.map((ticket, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`cursor-pointer border p-3 rounded-xl flex justify-between items-center ${
                    selectedTicket?.type === ticket.type
                      ? "border-blue-600 bg-blue-50"
                      : ""
                  }`}
                >
                  <p className="font-medium">{ticket.type}</p>
                  <p className="font-semibold">{ticket.price} ETB</p>
                </div>
              ))}
            </div>

            {/* Quantity */}
            {selectedTicket && (
              <div className="mt-4">
                <p className="font-medium">Quantity</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    className="px-3 py-1 border rounded"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>

                  <span className="text-lg font-bold">{quantity}</span>

                  <button
                    className="px-3 py-1 border rounded"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Total Price */}
            {selectedTicket && (
              <div className="mt-4 text-xl font-semibold">
                Total: {selectedTicket.price * quantity} ETB
              </div>
            )}

            <DialogFooter className="mt-6">
              <button
                disabled={!selectedTicket}
                onClick={() => {
                  if (!selectedTicket) return;
                  router.push(
                    `/checkout?ticketType=${selectedTicket.type}&quantity=${quantity}`
                  );
                }}
                className={`w-full py-3 rounded-xl font-semibold ${
                  selectedTicket
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                Continue
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
