import { Bell, ChevronDown, Layout, Search, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Outlet } from "react-router-dom";

const MenuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Create Article", href: "/create-article" },
];

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 ">
      <DashboardSidebar />
      <div className="overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}
