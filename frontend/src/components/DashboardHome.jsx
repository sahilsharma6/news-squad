import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Bell, ChevronDown, MessageSquare, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LineChartComponent } from "./LineChart";
import { PieChartComponent } from "./PieChart";

export default function DashboardHome() {
  return (
    <main className="flex-1 p-8 overflow-auto ">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Type to search..."
            className="pl-10 w-64"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div className="ml-2 mr-2">
              <p className="text-sm font-medium">Rahul Gupta</p>
              <p className="text-xs text-gray-500">Web Developer</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">This Week's Overview</h2>
          <Select defaultValue="current-week">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-week">Current Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Clients Added"
            value="197"
            change="+2.5%"
            isPositive={true}
            percentage={75}
          />
          <StatCard
            title="Contracts Signed"
            value="745"
            change="+1.5%"
            isPositive={false}
            percentage={60}
          />
          <StatCard
            title="Invoice Sent"
            value="512"
            change="+0.5%"
            isPositive={true}
            percentage={45}
          />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-28">
        <div className="h-[200px]  bg-gray-100 rounded-md flex items-center justify-center">
          <LineChartComponent />
        </div>
        <div className="h-[200px]  bg-gray-100 rounded-md flex items-center justify-center">
          <PieChartComponent />
        </div>
      </div>
    </main>
  );
}
function StatCard({ title, value, change, isPositive, percentage }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-4xl font-bold">{value}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
          <div className="relative w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="4"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-blue-600"
                strokeWidth="4"
                strokeDasharray={`${percentage} 100`}
                transform="rotate(-90 18 18)"
              />
            </svg>
          </div>
        </div>
        <div
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
            isPositive
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <span>{change}</span>
          <span className="ml-1">Since last week</span>
        </div>
      </CardContent>
    </Card>
  );
}
