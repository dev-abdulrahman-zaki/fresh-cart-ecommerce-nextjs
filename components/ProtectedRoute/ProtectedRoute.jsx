"use client";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
// import { useEffect, useLayoutEffect } from "react";

export default function ProtectedRoute({ children }) {
  // const router = useRouter();

  if (localStorage.getItem("token") === null) {
    // router.push("/signin");
    redirect("/signin");
  }

  return <>{children}</>;
}
