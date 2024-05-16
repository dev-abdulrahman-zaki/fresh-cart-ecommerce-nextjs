import Cart from '@/components/22Cart/Cart';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import React from 'react'

export const metadata = {
  title: "Cart",
  description: "Cart",
};

export default function page() {
  return (
    // <ProtectedRoute>
      <Cart />
    // </ProtectedRoute>
  )
}
