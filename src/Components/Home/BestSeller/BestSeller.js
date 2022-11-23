import React from "react";
import ProductCard from "../Deals/ProductCard";
import productImage1 from "../../../assets/product-image/product-1.png"
import productImage2 from "../../../assets/product-image/product-2.png"
import productImage3 from "../../../assets/product-image/product-3.png"
import productImage4 from "../../../assets/product-image/product-4.png"

function BestSeller() {
  return (
    <section className="deals-of-the-day p-12 flex-col flex lg:flex-row items-center">
      <div className="py-8 lg:w-1/5 w-full flex justify-center flex-col">
        <h2 className="text-5xl py-8 italic text-center lg:text-left">BestSeller</h2>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 mx-auto bg-[#50B291] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-[#50B291] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          See All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          productImage={productImage1}
          productName="Dr Nikolas Linde Premium Set"
          productPrice="49"
        />
        <ProductCard
          productImage={productImage2}
          productName="Aurora Glow SUn Base"
          productPrice="37"
        />
        <ProductCard
          productImage={productImage3}
          productName="Heparin Glycol Bentpla Gel"
          productPrice="19"
        />
        <ProductCard
          productImage={productImage4}
          productName="Bio Hyaluron Fluid Ampolue"
          productPrice="39"
        />
      </div>
    </section>
  );
}

export default BestSeller;
