import Orders from "@/components/24Orders/Orders";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import React from "react";

export const metadata = {
  title: "All Orders",
  description: "All Orders",
};

export default function page() {
  return (
    // <ProtectedRoute>
      <Orders />
    // </ProtectedRoute>
  );
}
