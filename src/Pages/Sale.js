import React from "react";
import Catalogue from "../Components/Home/Catalogue/Catalogue";
import DealsOfTheDay from "../Components/Home/Deals/DealsOfTheDay";
import ProductCard from "../Components/Home/Deals/ProductCard";
import Hero from "../Components/Home/Hero/Hero";
import ProductOnSale from "../Components/ProductOnSaleCard/ProductOnSale";

function Sale() {
  return (
    <div className="my-4 p-4">
      <Hero />

      <h3 className="italic text-center text-4xl font-semibold p-4">
        Deals of the day
      </h3>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
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
        <ProductCard
          productImage="./assets/images/product-image/product-3.png"
          productName="Heparin Glycol Bentpla Gel"
          productPrice="19"
        />
        <ProductCard
          productImage="./assets/images/product-image/product-2.png"
          productName="Aurora Glow SUn Base"
          productPrice="37"
        />
        <ProductCard
          productImage="./assets/images/product-image/product-4.png"
          productName="Bio Hyaluron Fluid Ampolue"
          productPrice="39"
        />
        <ProductCard
          productImage="./assets/images/product-image/product-1.png"
          productName="Dr Nikolas Linde Premium Set"
          productPrice="49"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-12 p-4  md:grid-cols-2 sm:grid-cols-1">
        <ProductOnSale />
        <ProductOnSale />
        <ProductOnSale />
        <ProductOnSale />
        <ProductOnSale />
        <ProductOnSale />
      </div>

      <div>
        <Catalogue />
      </div>
    </div>
  );
}

export default Sale;
