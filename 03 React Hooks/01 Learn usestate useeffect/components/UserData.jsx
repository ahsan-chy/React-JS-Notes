import { CustomLink } from "@/app/page";
import React, { useState } from "react";

const UserData = () => {
  const [user, setUser] = useState({
    name: "",
    email: "Notchange@email.com",
    age: 0,
    gender: "Male",
  });

  const onChange = (e) => {
    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  return (
    <div className="mt-14 grid justify-center align-items-center">
      {console.log("user", user)}
      <form>
        <input type="text" onChange={onChange} className="border-2" placeholder="EnterName" />
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

export default UserData;
