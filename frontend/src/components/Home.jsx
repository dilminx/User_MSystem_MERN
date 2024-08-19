import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const fetchData = await axios.get("http://localhost:5000/users/");
      console.log(fetchData.data)
      setUser(fetchData.data.Users); // Assuming the data structure is fetchData.data.Users
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="mb-6 text-3xl font-bold text-center">User List</h1>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <span className="text-lg font-semibold">Loading...</span>
        </div>
      ) : (
        <>
          {user.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {user.map((user, index) => (
                <div
                  key={index}
                  className="p-4 transition-shadow duration-300 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600">Email: {user.gmail}</p>
                  <p className="text-gray-600">Age: {user.age}</p>
                  <p className="text-gray-600">Address: {user.address}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-lg font-semibold">There Is Nothing</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
