"use client";
import {
  Calendar,
  MapPin,
  Ticket,
  Clock,
  Users,
  ArrowLeft,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const event = events.find((e) => e.id === Number(id));

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <Ticket className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Event Not Found</h2>
          <p className="text-gray-600">
            The event you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/events")}>Browse Events</Button>
        </div>
      </div>
    );
  }

  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Button>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Image */}
            <div className="w-full h-80 lg:h-96 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 backdrop-blur-sm border-0">
                {event.category}
              </Badge>
            </div>

            {/* Event Title & Description */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {event.title}
                </h1>
                <p className="text-lg text-gray-600 mt-3 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Date</p>
                    <p className="text-base font-semibold text-gray-900">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Time</p>
                    <p className="text-base font-semibold text-gray-900">
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Location
                    </p>
                    <p className="text-base font-semibold text-gray-900">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>

              {event.availableTickets && (
                <div className="bg-white rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Available Tickets
                      </p>
                      <p className="text-base font-semibold text-gray-900">
                        {event.availableTickets} remaining
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Ticket Purchase */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Get Your Tickets
                  </h3>
                  <p className="text-gray-600">Secure your spot now</p>
                </div>

                <div className="space-y-4">
                  {event.tickets?.map((ticket, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedTicket(ticket)}
                      className={`cursor-pointer border-2 p-4 rounded-xl transition-all duration-200 ${
                        selectedTicket?.type === ticket.type
                          ? "border-blue-500 bg-blue-50/50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {ticket.type}
                          </p>
                          {ticket.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {ticket.description}
                            </p>
                          )}
                        </div>
                        <p className="text-lg font-bold text-gray-900">
                          {ticket.price} ETB
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantity Selector */}
                {selectedTicket && (
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        Quantity
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                          className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span className="text-lg font-bold w-8 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-semibold text-gray-700">Total</span>
                      <span className="text-xl font-bold text-gray-900">
                        {totalPrice} ETB
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm"
                      disabled={!selectedTicket}
                    >
                      <Ticket className="w-5 h-5" />
                      {selectedTicket
                        ? "Proceed to Checkout"
                        : "Select Ticket Type"}
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Confirm Your Selection
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Event:</span>
                          <span className="font-semibold">{event.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ticket Type:</span>
                          <span className="font-semibold">
                            {selectedTicket?.type}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span className="font-semibold">{quantity}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-gray-600">Total Amount:</span>
                          <span className="text-lg font-bold text-gray-900">
                            {totalPrice} ETB
                          </span>
                        </div>
                      </div>
                    </div>

                    <DialogFooter className="flex flex-col sm:flex-col gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                        className="w-full"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          if (!selectedTicket) return;
                          router.push(
                            `/checkout?eventId=${event.id}&ticketType=${selectedTicket.type}&quantity=${quantity}`
                          );
                        }}
                        className="w-full gap-2 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Continue to Payment
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Ticket className="w-3 h-3 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-blue-900">
                      Instant Confirmation
                    </p>
                    <p className="text-xs text-blue-700">
                      Receive your digital tickets immediately after payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
