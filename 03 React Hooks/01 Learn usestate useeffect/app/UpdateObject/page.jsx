"use client";

import UserData from "@/components/UserData";
import React from "react";
import { CustomLink } from "../page";
import UpdateMultipleInputData from "@/components/UpdateMultipleInputData";

const UpdateObject = () => {
  return (
    <div className="p-8">
      <CustomLink href="/" className="text-green-900 text-xl font-bold">
        Home
      </CustomLink>
      <h2 className="text-center text- text-amber-700 ">
        Enter Your name and your data will reflect on page
      </h2>
      <UserData />
      <UpdateMultipleInputData />
    </div>
  );
};

export default UpdateObject;
