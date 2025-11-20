import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EventChart from "@/components/dashboard/EventChart";
import { TrendingUp, Users, Ticket, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Events",
      value: "12",
      change: "+2",
      icon: Ticket,
      trend: "up",
    },
    {
      label: "Tickets Sold",
      value: "532",
      change: "+48",
      icon: Users,
      trend: "up",
    },
    {
      label: "Revenue",
      value: "$7,240",
      change: "+12%",
      icon: DollarSign,
      trend: "up",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's your event overview.
          </p>
        </div>
        <Button className="gap-2">
          <TrendingUp className="w-4 h-4" />
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-sm bg-gradient-to-br from-white to-gray-50/50"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
                <Icon className="w-4 h-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <Badge
                  variant={stat.trend === "up" ? "default" : "secondary"}
                  className="mt-2 bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
                >
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Chart Section */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Monthly Ticket Sales
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <EventChart />
        </CardContent>
      </Card>
    </div>
  );
}
