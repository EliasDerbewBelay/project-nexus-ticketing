"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { events } from "@/data/events";

export default function CheckoutPage() {
  const params = useSearchParams();

  const eventId = params.get("eventId");
  const ticketType = params.get("ticketType");
  const quantity = params.get("quantity");

  const event = events.find((e) => e.id === Number(eventId));

  if (!event) return <p className="p-6 text-red-500">Event not found.</p>;

  const ticket = event.tickets.find((t) => t.type === ticketType);

  if (!ticket)
    return <p className="p-6 text-red-500">Ticket type not found.</p>;

  const total = ticket.price * Number(quantity);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Checkout</h1>

      {/* Event Summary */}
      <div className="mt-6 border rounded-xl p-4 flex gap-4 shadow">
        <div className="relative w-40 h-40 rounded overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-gray-600">{ticket.type} Ticket</p>
          <p className="text-gray-600">Quantity: {quantity}</p>

          <p className="text-xl font-semibold mt-4">Total: {total} ETB</p>
        </div>
      </div>

      {/* Payment Button */}
      <button className="w-full mt-8 py-3 bg-blue-600 text-white rounded-xl font-semibold">
        Proceed to Payment
      </button>
    </div>
  );
}
