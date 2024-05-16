import Payment from '@/components/23Payment/Payment';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import React from 'react'

export const metadata = {
  title: "Payment",
  description: "Payment",
};

export default function page() {
  return (
    <ProtectedRoute>
      <Payment />
    </ProtectedRoute>
  )
}
