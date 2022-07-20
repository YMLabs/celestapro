import React from "react";
import Marquee from "react-fast-marquee";

function Brands() {
  const images = ["https://picsum.photos/200", "https://picsum.photos/100"];

  return (
    <section className="brands flex items-center py-4 my-4 mx-12">
      <Marquee duration={10000} background="#fafafa" height="250px">
        <img src="./assets/images/brands/brand1.png" alt="" />
        <img src="./assets/images/brands/brand2.png" alt="" />
        <img src="./assets/images/brands/brand3.png" alt="" />
        <img src="./assets/images/brands/brand4.png" alt="" />
        <img src="./assets/images/brands/brand5.png" alt="" />
        <img src="./assets/images/brands/brand6.png" alt="" />
        <img src="./assets/images/brands/brand7.png" alt="" />
        <img src="./assets/images/brands/brand8.png" alt="" />
        <img src="./assets/images/brands/brand9.png" alt="" />
      </Marquee>
    </section>
  );
}

export default Brands;
