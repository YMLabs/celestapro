import React from "react";
import ProductCard from "../Deals/ProductCard";

function BestSeller() {
  return (
    <section className="deals-of-the-day p-12 flex items-center">
      <div className="py-8 w-1/5">
        <h2 className="text-5xl py-8 italic">BestSeller</h2>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-[#50B291] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-[#50B291] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          See All
        </button>
      </div>
      <div className="flex">
        <ProductCard
          productImage="./assets/images/product-image/product-1.png"
          productName="Dr Nikolas Linde Premium Set"
          productPrice="49"
        />
        <ProductCard
          productImage="./assets/images/product-image/product-2.png"
          productName="Aurora Glow SUn Base"
          productPrice="37"
        />
        <ProductCard
          productImage="./assets/images/product-image/product-3.png"
          productName="Heparin Glycol Bentpla Gel"
          productPrice="19"
        />
        <ProductCard
          productImage="./assets/images/product-image/product-4.png"
          productName="Bio Hyaluron Fluid Ampolue"
          productPrice="39"
        />
      </div>
    </section>
  );
}

export default BestSeller;
