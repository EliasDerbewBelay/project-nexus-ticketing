import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventChart from "@/components/dashboard/EventChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Tickets Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">532</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$7,240</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Ticket Sales</CardTitle>
        </CardHeader>

        <CardContent>
          <EventChart />
        </CardContent>
      </Card>
    </div>
  );
}
