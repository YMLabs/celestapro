import React from "react";

function TestimonialCard({profilePicLocation, customerName, datePosted, review}) {
  return (
    <div className="bg-white w-full rounded-lg p-4 m-6 shadow-md hover:shadow-xl transition ease-in-out duration-200 sm:inline-block">
      <div className="flex items-start text-left">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <a href="#" className="block relative">
              <img
                alt="profile"
                src={profilePicLocation}
                className="mx-auto object-cover rounded-full h-16 w-16 "
              />
            </a>
          </div>
        </div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-[#50B291] font-bold">
              {customerName}
            </span>
            <span className="text-gray-500  ml-2 text-sm">
              {datePosted}
            </span>
          </p>
          <div className="flex items-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
            </svg>
          </div>
          <div className="mt-3">
            <p className="mt-1 max-w-xs">
              {review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
