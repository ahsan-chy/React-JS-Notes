import { CustomLink } from "@/app/page";
import React, { useState } from "react";

const UpdateMultipleInputData = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
  });

  const onChange = (e) => {
    setUser((prev) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    
  };

  return (
    <div className="mt-14 grid justify-center align-items-center">
      {console.log("user", user)}
      <h2 className="text-center text- text-amber-700 ">
        You can update specific data input values
      </h2>
      <form className="grid gap-2">
        <input
          type="text"
          name="name"
          onChange={onChange}
          className="border-2"
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          onChange={onChange}
          className="border-2"
          placeholder="Email"
        />
        <input type="text" name="age" onChange={onChange} className="border-2" placeholder="Age" />
        <input
          type="text"
          name="gender"
          onChange={onChange}
          className="border-2"
          placeholder="Gender"
        />
      </form>
      <div>
        <ul>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Age: {user.age}</li>
          <li>Gender: {user.gender}</li>
        </ul>
      </div>
    </div>
  );
};

export default UpdateMultipleInputData;
