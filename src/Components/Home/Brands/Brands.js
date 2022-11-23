import React from "react";
import Marquee from "react-fast-marquee";
import Brand1 from "../../../assets/brands/brand1.png"
import Brand2 from "../../../assets/brands/brand2.png"
import Brand3 from "../../../assets/brands/brand3.png"
import Brand4 from "../../../assets/brands/brand4.png"
import Brand5 from "../../../assets/brands/brand5.png"
import Brand6 from "../../../assets/brands/brand6.png"
import Brand7 from "../../../assets/brands/brand7.png"
import Brand8 from "../../../assets/brands/brand8.png"
import Brand9 from "../../../assets/brands/brand9.png"

function Brands() {

  return (
    <section className="brands flex items-center py-4 my-4 mx-12">
      <Marquee duration={10000} background="#fafafa" height="250px">
        <img src={Brand1} alt="" />
        <img src={Brand2} alt="" />
        <img src={Brand3} alt="" />
        <img src={Brand4} alt="" />
        <img src={Brand5} alt="" />
        <img src={Brand6} alt="" />
        <img src={Brand7} alt="" />
        <img src={Brand8} alt="" />
        <img src={Brand9} alt="" />
      </Marquee>
    </section>
  );
}

export default Brands;
