import React, { use, useEffect, useState } from "react";
import ViewLatestHabits from "./ViewLatestHabits";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const LatestHabit = () => {
  

  const [habits, setHabits] = useState([]);
  const [load,setLoad]=useState(true);

  

  useEffect(() => {
    fetch("https://shourav-havittracker-server.onrender.com/publicHabitsLimit")
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoad(false)
        //console.log(data)
      })
      .catch((err) => {
        toast(err.message);
         setLoad(false)

      });
  }, []);

  if (load) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <ViewLatestHabits habits={habits}></ViewLatestHabits>
    </div>
  );
};

export default LatestHabit;
