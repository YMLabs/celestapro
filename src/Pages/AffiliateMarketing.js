import React from "react";
import GreenBtn from "../Components/Buttons/GreenBtn";
import Brands from "../Components/Home/Brands/Brands";
import Marquee from "react-fast-marquee";

function AffiliateMarketing() {
  return (
    <div>
      <section className="h-3/4 flex items-center justify-center">
        <div className="w-2/6">
          <h2 className="text-4xl font-bold">
            Get The Best Experience In Affiliate Marketing
          </h2>
          <p className="py-4">We convert our traffic into your leads</p>
          <GreenBtn btnText="Let's Start" />
        </div>
        <div className="">
          <img
            className="h-80"
            src="./assets/images/hero-components/affiliate-page-hero-pic.png"
            alt=""
          />
        </div>
      </section>

      <div className="mx-auto my-16 py-4 grid w-8/12 grid-cols-3 grid-rows-3 gap-4 text-white">
        <div className="row-span-2 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-semibold">WordWide Shipping</h3>
        </div>
        <div className="col-span-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <h3 className="text-2xl font-semibold">Flexible Settings</h3>
        </div>
        <div className="row-span-2 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
          <h3 className="text-2xl font-semibold">Get market insights</h3>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="text-2xl font-semibold">Case Studies</h3>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          <h3 className="text-2xl font-semibold">Market Research</h3>
        </div>
        <div className="flex h-40 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-md hover:shadow-lg hover:shadow-emerald-500 shadow-emerald-400 transition ease-in-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-semibold">Flexible Payments</h3>
        </div>
      </div>

      {/* <section className="catalogue  p-4 m-4">
      <h2 className="text-4xl font-bold text-center">
          What We Offer
        </h2>
        <div className="flex items-center justify-evenly p-4 m-4">
          <div className="container">
            <a
              className="item rounded-xl shadow-md hover:shadow-xl transition ease-in-out duration-200"
              id="item1"
            >
              <div className="">
                <div className="text-right mb-12">
                  <h2 className="text-3xl">Serum</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img
                  className="h-56"
                  src="./assets/images/catalogue/serum1.png"
                  alt=""
                />
              </div>
            </a>
            <a
              className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200"
              id="item2"
            >
              <div className="flex justify-between items-center flex-row-reverse">
                <div className="text-right mb-12">
                  <h2 className="text-3xl">Serum</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="./assets/images/catalogue/serum2.png" alt="" />
              </div>
            </a>
            <a
              className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200"
              id="item3"
            >
              <div className="">
                <div className="flex flex-col justify-center mb-12">
                  <h2 className="text-3xl">Serum</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img
                  className=""
                  src="./assets/images/catalogue/serum3.png"
                  alt=""
                />
              </div>
            </a>
            <a
              className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200"
              id="item4"
            >
              <div className="flex items-center">
                <div className="">
                  <h2 className="text-3xl">Serum</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img
                  className=""
                  src="./assets/images/catalogue/serum1.png"
                  alt=""
                />
              </div>
            </a>
            <a
              className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200"
              id="item5"
            >
              <div className="flex items-center">
                <div className="mr-8">
                  <h2 className="text-3xl">Serum</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img
                  className=""
                  src="./assets/images/catalogue/serum1.png"
                  alt=""
                />
              </div>
            </a>
            <a
              className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200"
              id="item6"
            >
              <div className="flex justify-between items-center flex-row-reverse">
                <div className="text-right mb-12">
                  <h2 className="text-3xl">Serum</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="./assets/images/catalogue/serum2.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </section> */}

      <section className="why-choose-us flex flex-row-reverse items-center justify-evenly">
        <div className="w-2/6">
          <h2 className="text-4xl font-bold">Why Should You Choose Us</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
            enim, iaculis netus elementum ut amet. Laoreet tincidunt sit platea
            pulvinar tempus quis.
          </p>
        </div>
        <div>
          <img src="./assets/images/why-choose-us.png" alt="" />
        </div>
      </section>

      <section>
        <h2 className="text-center text-3xl font-bold">Our Partners</h2>
        <Brands />
      </section>

      <section className=" items-center py-4 my-4 mx-12">
        <h2 className="text-center text-3xl font-bold">
          Supported Payment Methods
        </h2>
        <Marquee duration={10000} background="#fafafa" height="250px">
          <img src="./assets/images/brands/payment.png" alt="" />
        </Marquee>
      </section>

      <section className="wholesale-form px-4 mx-4 py-8">
        <h2 className="text-3xl pl-4 ml-4 font-semibold text-center">
          Join Us and become a part of amazing journey
        </h2>

        <div className="flex flex-col items-center p-4 m-4">
          <form className="lg:w-5/12 md:w-3/4">
            <div className="mb-6">
              <label
                for="name"
                className="block mb-2 text-sm font-bold text-neutral-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-bold text-neutral-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                for="phoneNumber"
                className="block mb-2 text-sm font-bold text-neutral-600"
              >
                Your Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="+82-X-XXXX-XXXX"
                required
              />
            </div>

            <div className="mb-6">
              <label
                for="website"
                className="block mb-2 text-sm font-bold text-neutral-600"
              >
                Your Website or Social Page (Facebook/Instagram/Twitter)
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="https://example.com"
                required
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-[#50B291] bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                I agree to the{" "}
                <a className="underline underline-offset-2" href="">
                  Terms and Conditions
                </a>
                .
              </label>
            </div>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-[#50B291] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-[#50B291] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit Proposal
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AffiliateMarketing;
