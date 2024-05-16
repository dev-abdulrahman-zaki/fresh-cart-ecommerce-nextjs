"use client";
import { Inter } from "next/font/google";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// to ensure it only executes on the client side
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}
import "./globals.css";

// not used
// import "../node_modules/react-owl-carousel/dist/react-owl-carousel.min.css";
// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme.css";

// Import Dependencies
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Offline } from "react-detect-offline";

// Import Context (provider only)
import AuthProvider from "../context/Authentication";
import CartContextProvider from "../context/CartContext";

// Import Components
import Navbar from "@/components/02Navbar/Navbar";

import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // React Query
  const clientQuery = new QueryClient();

  return (
    <html lang="en">
      <head>
      <Script src="https://code.jquery.com/jquery-3.7.1.min.js"></Script>
      {/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script> */}

        {/* Favicon links */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={clientQuery}>
          <AuthProvider>
            <CartContextProvider>
              <Navbar />
              <div className="mainHeight">{children}</div>
            </CartContextProvider>
          </AuthProvider>
        </QueryClientProvider>
        <Toaster
          containerStyle={{
            top: 58.5,
          }}
        />
        <Offline>
          <div className="offlineMsg bg-dark text-white p-3">
            Oops! It seems like you&apos;re currently offline
          </div>
        </Offline>
      </body>
    </html>
  );
}
