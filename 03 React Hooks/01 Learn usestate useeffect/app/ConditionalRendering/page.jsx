"use client";

import React, { useEffect, useState } from "react";

const ConditionalRendering = ({ id }) => {
  const [data, setData] = useState(5);

  const IncreaseCount = () => {
    setData(data => data + 1);
    setData(data => data + 1);
  };

  useEffect(() => {}, [data]);

  return (
    <div className="m-24">
      {data ? (
        <div>
          <h3 className="text-green-800 text-xl font-semibold">Current Data</h3>
          <button
            className="bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded mt-5"
            onClick={IncreaseCount}>
            Increae Count {data}
          </button>
        </div>
      ) : (
        <div className="text-red-700 text-xl font-semibold">Not Found</div>
      )}
    </div>
  );
};

export default ConditionalRendering;
