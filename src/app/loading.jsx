"use client";
import { ThreeCircles } from "react-loader-spinner";

export default function loading() {
  return (
    <div className="vh-100  d-flex justify-content-center align-items-center">
      <ThreeCircles
        height="70"
        width="70"
        color="#565656"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
