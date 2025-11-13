import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import Morning from "../assets/Sun.jpg";
import Evening from "../assets/moon.jpg";
import Work from "../assets/work.png";
import Fitness from "../assets/fitness.jpg";
import Study from "../assets/education.webp";
import { useNavigate } from "react-router";

const ViewLatestHabits = ({ habits }) => {
  const { user } = useContext(AuthContext);
  const navigate=useNavigate()

  const categoryImage = (category) => {
    switch (category) {
      case "Morning":
        return Morning;
      case "Work":
        return Work;
      case "Fitness":
        return Fitness;
      case "Evening":
        return Evening;
      case "Study":
        return Study;
      default:
        return null;
    }
  };
  const handleViaDetails = (id) => {
    navigate(`/habitDetails/${id}`)
  }

  return (
    <div className="py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <div
            key={habit._id}
            className="bg-black border border-white rounded-lg shadow-lg p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-xl mb-2">
                  {habit.title}
                </h3>
                {categoryImage(habit.category) && (
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={categoryImage(habit.category)}
                    alt=""
                  />
                )}
              </div>

              <p className="text-white text-sm mb-1">{habit.description}</p>
              <p className="text-white text-sm mb-1">
                <span className="font-semibold">Category:</span>{" "}
                {habit.category}
              </p>

              <p className="text-white text-sm mb-1">
                <span className="font-semibold">Time:</span> {habit.time}
              </p>
              <p className="text-white text-sm mb-1">
                <span className="font-semibold">User:</span> {habit.name}
              </p>
            </div>
            <button
              key={habit._id}
              onClick={() => handleViaDetails(habit._id)} // pass habit id dynamically
              className="bg-[#00b5d9] text-white font-semibold py-2 rounded-md hover:bg-white hover:text-black transition-all"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLatestHabits;
