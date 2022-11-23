import React from "react";


function Values() {
  return (
    <section className="values w-full justify-evenly my-8 px-12 pb-20 py-4 flex items-center">
      <div className="flex ">
        <div className="p-8 text-center rounded-md bg-white flex flex-col items-center shadow-2xl relative left-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="currentColor"
            className="bi bi-airplane-engines"
            viewBox="0 0 16 16"
          >
            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
          </svg>
          <h3 className="text-xl font-semibold">Worldwide Shipping</h3>
          <p>Free shipping for orders above $500 .</p>
          <a className="font-bold text-neutral-500" href="example.com">
            Learn More
          </a>
        </div>

        <div className="p-8 text-center rounded-md bg-neutral-200 flex flex-col items-center shadow-2xl relative top-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <h3 className="text-xl font-semibold">100% Payment Secured</h3>
          <p>We ensure secure payments.</p>
          <a className="font-bold text-neutral-500" href="">
            Learn More
          </a>
        </div>

        <div className="p-8 text-center rounded-md bg-white flex flex-col items-center shadow-2xl relative right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <h3 className="text-xl font-semibold">Friendly Service</h3>
          <p>Shop with Confidence</p>
          <a className="font-bold text-neutral-500" href="">
            Learn More
          </a>
        </div>
      </div>

      <div className="text-white text-right">
        <h2 className="text-5xl italic mb-8">Our Values</h2>
        <p className="text-xl">
          The most important mission for our company is to make our customers
          happy.
        </p>
      </div>
    </section>
  );
}

export default Values;
