"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { events } from "@/data/events";
import { ArrowLeft, Calendar, MapPin, Ticket, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter();

  const eventId = params.get("eventId");
  const ticketType = params.get("ticketType");
  const quantity = Number(params.get("quantity"));

  const event = events.find((e) => e.id === Number(eventId));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6 space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Ticket className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Event Not Found</h2>
            <p className="text-gray-600">The event you're looking for doesn't exist.</p>
            <Button onClick={() => router.push('/events')}>
              Browse Events
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const ticket = event.tickets.find((t) => t.type === ticketType);

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6 space-y-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
              <Ticket className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Ticket Type Not Found</h2>
            <p className="text-gray-600">The selected ticket type is not available.</p>
            <Button onClick={() => router.back()}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const total = ticket.price * quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600 mt-1">Complete your ticket purchase</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Card */}
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-blue-600" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-white/90 text-gray-800 backdrop-blur-sm">
                      {event.category}
                    </Badge>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                        {event.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date} • {event.time}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3 border-t">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Ticket Type</p>
                        <p className="font-semibold text-gray-900">{ticket.type}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Quantity</p>
                        <p className="font-semibold text-gray-900">{quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price per ticket</span>
                    <span className="font-medium text-gray-900">{ticket.price} ETB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quantity</span>
                    <span className="font-medium text-gray-900">× {quantity}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-gray-900">{total} ETB</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Assurance */}
            <Card className="border-0 bg-green-50/50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-medium text-green-900">Secure Checkout</p>
                    <p className="text-sm text-green-700">
                      Your payment information is encrypted and secure. We don't store your payment details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Payment Action */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Order Summary Card */}
              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Complete Purchase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features List */}
                  <div className="space-y-3">
                    {[
                      "Instant digital tickets",
                      "Mobile-friendly QR codes",
                      "Free cancellation within 24h",
                      "Email confirmation"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Total</span>
                      <span className="text-2xl font-bold text-gray-900">{total} ETB</span>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      All taxes and fees included
                    </p>
                  </div>

                  {/* Payment Button */}
                  <Button
                    onClick={() =>
                      router.push(
                        `/payment?eventId=${event.id}&ticketType=${ticket.type}&quantity=${quantity}`
                      )
                    }
                    size="lg"
                    className="w-full gap-2 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm mt-4"
                  >
                    <Shield className="w-4 h-4" />
                    Proceed to Payment
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>

              {/* Support Info */}
              <Card className="border-0 bg-blue-50/50 border-blue-200">
                <CardContent className="p-4">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-blue-900">Need Help?</p>
                    <p className="text-xs text-blue-700">
                      Contact support@swiftpass.com or call +251-XXX-XXXX
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}