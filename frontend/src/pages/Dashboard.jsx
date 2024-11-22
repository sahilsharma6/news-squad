import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { Toast, ToastClose, ToastDescription, ToastTitle, ToastProvider, ToastViewport } from "@/components/ui/toast"; // Adjust the import based on your setup

export default function DashboardLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ open: false, variant: "", title: "", description: "" });

  const navigateTo = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const response = await apiClient.get("/api/check-admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setIsAdmin(response.data.isAdmin);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching admin status:", error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, []);

  useEffect(() => {
    if (loading) return;

    if (isAdmin === false) {
      setToast({
        open: true,
        variant: "destructive",
        title: "Error",
        description: "You are not an admin",
      });

      setTimeout(() => navigateTo("/"), 1000);
    }
  }, [loading, isAdmin, navigateTo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ToastProvider>
      {isAdmin ? (
        <div className="flex   min-h-screen overflow-hidden bg-gray-100">
          <DashboardSidebar />
          <div className="m-2 w-[80%] overflow-hidden">
            <Outlet />
          </div>
        </div>
      ) : (
        <>
          {toast.open && (
            <Toast
              variant={toast.variant}
              open={toast.open}
              onOpenChange={() => setToast({ ...toast, open: false })}
              className={`text-4xl  bottom-96`}
            >
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastDescription>{toast.description}</ToastDescription>
              <ToastClose />
            </Toast>
          )}
          <ToastViewport />
        </>
      )}
    </ToastProvider>
  );
}
