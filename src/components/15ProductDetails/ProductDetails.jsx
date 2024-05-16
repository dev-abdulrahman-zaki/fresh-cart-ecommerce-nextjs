"use client";
import React, { useContext, useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
// import Link from "next/link";
import { CartContext } from "./../../context/CartContext";
import toast from "react-hot-toast";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

export default function ProductDetails({ id, data }) {
  const { addProductToCart } = useContext(CartContext);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleAddToCart() {
    if (localStorage.getItem("token") !== null) {
      setDataIsLoading(true);
      const res = await addProductToCart(id);
      if (res?.status === "success") {
        toast.success(res.message);
      } else {
        toast.error("An error occurred while adding the product");
      }
      setDataIsLoading(false);
    } else {
      toast.error("Please login to add product to cart");
    }
  }



  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-md-3">
          <figure>
            <OwlCarousel className="owl-theme" loop margin={10} items={1}>
              {data.data.images.map((image, idx) => {
                return (
                  <div className="item" key={idx}>
                    <Image
                      loading="lazy"
                      src={image}
                      className="w-100"
                      alt={data.data.title}
                    />
                  </div>
                );
              })}
            </OwlCarousel>
          </figure>
        </div>
        <div className="col-md-9">
          <h1>{data.data.title}</h1>
          <p className="text-muted px-2">{data.data.description}</p>
          {/* <Link to={`/categoryDetails/${data.data.data.category._id}`}> */}
          <p className="text-main">{data.data.category.name}</p>
          {/* </Link> */}

          <p>{data.data.price} EGP</p>
          <div className="row">
            <div className="col-10 ">
              <button
                onClick={handleAddToCart}
                type="button"
                className="btn btnHover bg-main w-100 text-white"
              >
                {dataIsLoading ? (
                  <>
                    <FallingLines
                      color="#fff"
                      width="30"
                      visible={true}
                      ariaLabel="falling-lines-loading"
                    />
                  </>
                ) : (
                  "Add To Cart"
                )}
              </button>
            </div>

            <div className="col-2  text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
