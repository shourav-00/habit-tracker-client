import React, { use, useEffect, useState } from "react";
import ViewLatestHabits from "./ViewLatestHabits";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const LatestHabit = () => {
  const {loading} = use(AuthContext);

  const [habits, setHabits] = useState([]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <span className="loading loading-dots loading-xl"></span>
  //     </div>
  //   );
  // }

  useEffect(() => {
    fetch("http://localhost:3000/publicHabitsLimit")
      .then((res) => res.json())
      .then((data) =>{
        setHabits(data)
         //console.log(data)
        }
        )
      .catch((err) => toast(err.message));
  }, []);
  return (
    <div>
      <ViewLatestHabits habits={habits}></ViewLatestHabits>
    </div>
  );
};

export default LatestHabit;
