import ProductDetails from "@/components/15ProductDetails/ProductDetails";
import React from "react";

async function getProductDetails(id) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  return json;
}

export async function generateMetadata({ params }) {
  const id = params.id;
  const { data } = await getProductDetails(id);
  // const previousImages = (await parent).openGraph?.images || [];
  return {
    title: data?.title || "Product Details",
    description: data?.description || "Product Details",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function page({ params }) {
  const id = params.id;
  const data = await getProductDetails(id);
  return <ProductDetails {...{ data, id }} />;
}
