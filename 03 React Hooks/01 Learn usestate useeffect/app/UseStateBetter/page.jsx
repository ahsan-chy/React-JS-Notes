"use client";

import React, { useState } from "react";

const UseStateBetter = ({ id }) => {
  const [data, setData] = useState(0);

  const IncreaseCount = () => {
    setData((data) => data + 1);
    setData((data) => data + 1);
  };

  return (
    <div className="m-24 grid content-center gap-4 items-center text-center">
      useState
      <button
        className="bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded mt-5"
        onClick={IncreaseCount}>
        Increae Count {data}
      </button>
    </div>
  );
};

export default UseStateBetter;
