import React from "react";

const User = ({ user }) => {
  return (
    <div className="bg-indigo-700  text-white px-5 py-10 rounded-lg lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10">
      <img
        className="block mx-auto rounded-full"
        src={user.picture.large}
        alt=""
      />
      <div className="text-center">
        <h3 className="text-3xl my-3">
          {user.name.first} {user.name.last}
        </h3>
        <p className="text-2xl">{user.dob.age} Years</p>
        <div className="underline mx-auto my-5"></div>
      </div>
      <div className="md:flex md:justify-between">
        <div>
          <p className="flex items-center my-3 text-xl ">
            <span className="font-bold">Username:</span> {user.login.username}
          </p>
          <p className="flex items-center my-3 text-xl">
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p className="flex items-center my-3 text-xl ">
            <span className="font-bold"> Phone:</span> {user.phone}
          </p>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <ul>
          <li className="flex items-center justify-between my-3">
            <span className="font-bold">Country:</span> {user.location.country}
          </li>
          <li className="flex items-center justify-between my-3">
            <span className="font-bold">City:</span> {user.location.city}
          </li>
          <li className="flex items-center justify-between my-3">
            <span className="font-bold">Postal Code:</span>{" "}
            {user.location.postcode}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
