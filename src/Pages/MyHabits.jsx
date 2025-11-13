import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AllUserInfo from "../Components/AllUserInfo";

const MyHabits = () => {
  const [userAllData, setuserAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/UserData")
      .then((res) => res.json())
      .then((data) => setuserAllData(data))
      .catch((err) => toast.error(err.message));
  }, []);

  // Function to update streak/completionHistory from child
  const updateHabitInParent = (id, completionHistory) => {
    setuserAllData((prev) =>
      prev.map((habit) =>
        habit._id === id ? { ...habit, completionHistory } : habit
      )
    );
  };

  return (
    <div>
      <AllUserInfo
        userAllData={userAllData}
        setuserAllData={setuserAllData}
        updateHabitInParent={updateHabitInParent}
      />
    </div>
  );
};

export default MyHabits;
