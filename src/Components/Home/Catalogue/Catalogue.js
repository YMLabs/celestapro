import React from "react";

function Catalogue() {
  return (
    <div className="mx-auto my-16 py-4 grid w-8/12 grid-cols-3 grid-rows-3 gap-4 text-white">
      <div className="row-span-2 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
        <img
          className="h-56"
          src="./assets/images/catalogue/catalogue-1.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Devices</h3>
      </div>
      <div className="col-span-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
        <img
          className="h-56"
          src="./assets/images/catalogue/catalogue-2.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Fat Dissolving</h3>
      </div>
      <div className="row-span-2 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
        <img
          className="h-56"
          src="./assets/images/catalogue/catalogue-3.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Hair Treatment</h3>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
        <img
          className="h-56"
          src="./assets/images/catalogue/catalogue-4.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Lifting Threads</h3>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
        <img
          className="h-56"
          src="./assets/images/catalogue/catalogue-4.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Pro Home Care</h3>
      </div>
      <div className="flex h-60 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
        <img
          className="h-56"
          src="./assets/images/catalogue/catalogue-1.png"
          alt=""
        />
        <h3 className="text-2xl font-semibold">Skin Care</h3>
      </div>
    </div>
  );
}

export default Catalogue;
