import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
const UserList = () => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get("https://randomuser.me/api");
    setUser(response.data.results);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="sm:w-9/12 sm:mx-auto bg-gray-700  text-white px-5 py-10 mt-2 rounded-lg lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10 ">
      <div>
        {user.map((user, index) => (
          <div key={index}>
            <User user={user} key={index} />
          </div>
        ))}
      </div>
      <button
        className="block mx-auto mt-5 bg-gray-900 text-white py-1 px-4 rounded-lg transition-colors hover:bg-gray-600"
        onClick={() => fetchUser()}
      >
        {" "}
        Next User
      </button>
    </div>
  );
};

export default UserList;
