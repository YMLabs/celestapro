import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Shop", path: "#", current: false },
  { name: "Affiliate", path: "/affiliate", current: false },
  { name: "Wholesale", path: "/wholesale", current: false },
  { name: "Sale", path: "/sale", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-2 py-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-900 hover:text-white hover:bg-[#50B291] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="./assets/images/celestapro-logo.png"
                      alt="CelestaPRO"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="./assets/images/celestapro-logo.png"
                      alt="CelestaPRO"
                    />
                  </Link>
                </div>
                <div className="hidden flex-1 sm:block sm:ml-6">
                  <div className="flex justify-between items-center">
                    <a
                      // className={classNames(
                      //   item.current
                      //     ? "uppercase bg-teal-100 text-white"
                      //     : "uppercase text-neutral-900 hover:bg-[#50B291] hover:text-white",
                      //   "px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                      // )}
                      className="uppercase text-neutral-900 hover:bg-[#50B291] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
                      // aria-current={item.current ? "page" : undefined}
                    >
                      Shop
                    </a>

                    <Link to="/affiliate">
                      <a
                        className="uppercase text-neutral-900 hover:bg-[#50B291] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
                        // aria-current={item.current ? "page" : undefined}
                      >
                        Affiliate
                      </a>
                    </Link>
                    <Link to="/wholesale">
                      <a
                        className="uppercase text-neutral-900 hover:bg-[#50B291] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
                        // aria-current={item.current ? "page" : undefined}
                      >
                        Wholesale
                      </a>
                    </Link>
                    <Link to="/sale">
                      <a
                        className="uppercase text-neutral-900 hover:bg-[#50B291] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
                        // aria-current={item.current ? "page" : undefined}
                      >
                        Sale
                      </a>
                    </Link>

                    <div class="relative w-2/5">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        class="block p-4 pl-10 w-full text-sm text-gray-100 bg-[#50B291] rounded-lg border border-gray-300 focus:outline-none font-semibold placeholder-white"
                        placeholder="Search ..."
                        required
                      />
                      <button
                        type="submit"
                        class=" absolute right-2.5 bottom-2.5 bg-white text-[#50B291] hover:bg-gray-200 focus:ring-emerald-100 font-medium rounded-lg text-sm px-4 py-2 border-transparent focus:border-transparent focus:ring-0"
                      >
                        Search
                      </button>
                    </div>

                    {/* user icon  */}
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="#50B291"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </a>

                    {/* wishlist icon  */}
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="#50B291"
                        class="bi bi-suit-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                      </svg>
                    </a>

                    {/* cart icon  */}
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="#50B291"
                        class="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </a>

                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block px-6 py-2.5 bg-[#50B291] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-600 hover:shadow-lg focus:bg-[#50B291] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Log In/ Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden border-2 rounded-md mx-2">
            <div className="px-2 pt-2 pb-3 space-y-1">

              {navigation.map((item) => (
                <Link to={item.path}>
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current
                    ? "bg-gray-900 text-white"
                    : "text-neutral-900 hover:bg-[#50B291] hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    >
                  {item.name}
                </Disclosure.Button>
                  </Link>
              ))}

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
