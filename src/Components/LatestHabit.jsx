import React, { use, useEffect, useState } from "react";
import ViewLatestHabits from "./ViewLatestHabits";
import { AuthContext } from "../Context/AuthContext";

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
    fetch("http://localhost:3000/publicHabitsLinit")
      .then((res) => res.json())
      .then((data) => setHabits(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <ViewLatestHabits habits={habits}></ViewLatestHabits>
    </div>
  );
};

export default LatestHabit;
