import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ViewAllPubHabits from "../Components/ViewAllPubHabits";

const PublicHabits = () => {
  const [pubUser, setPubUser] = useState([]);
  useEffect(() => {
    fetch("https://shourav-havittracker-server.onrender.com/publicHabits")
      .then((res) => res.json())
      .then((data) => {
        setPubUser(data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <div>
      <ViewAllPubHabits pubUser={pubUser}></ViewAllPubHabits>
    </div>
  );
};

export default PublicHabits;
