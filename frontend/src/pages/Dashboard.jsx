import DashboardSidebar from "@/components/DashboardSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 ">
      <DashboardSidebar />
      <div className="overflow-y-scroll w-full">
        <Outlet />
      </div>
    </div>
  );
}
