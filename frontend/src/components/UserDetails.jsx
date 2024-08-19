import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const fetchData = await axios.get("http://localhost:5000/users/");
      setUsers(fetchData.data.Users);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="mt-5">
  {isLoading ? (
    "Loading..."
  ) : users.length > 0 ? (
    <div className="grid grid-cols-1 gap-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="p-6 transition-transform duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl"
        >
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-700">{user.gmail}</p>
          <p className="text-gray-600">Age: {user.age}</p>
          <p className="text-gray-500">Address: {user.address}</p>
          <div className="flex mt-4 space-x-4">
            <button
              onClick={() => deleteUser(user._id)}
              className="px-4 py-2 font-bold text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
            <Link to={`/update/${user._id}`}>
              <button className="px-4 py-2 font-bold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                Update
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  ) : (
    "There is nothing"
  )}
</div>

  );
};

export default UserDetails;
