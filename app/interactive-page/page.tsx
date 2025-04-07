"use client";

import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col px-20 md:px-50 lg:px-100 pt-50">
          <div className="text-3xl font-bold p-4 pl-0">
            Welcome to Interactive Page
          </div>
          <div>
            This route features a count button that demonstrates the power of
            client-side interactivity in Next.js. Click the button and see the
            count go up! This interactive feature is powered by the "use-client"
            directive in Next.js, which allows this component to be rendered on
            the client-side.
          </div>
          <div
            className="border rounded-2xl p-2 w-fit cursor-pointer"
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            count is {count}
          </div>
        </div>
      </div>
    </div>
  );
}
