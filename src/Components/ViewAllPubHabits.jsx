import React from "react";
import Morning from "../assets/Sun.jpg";
import Evening from "../assets/moon.jpg";
import Work from "../assets/work.png";
import Fitness from "../assets/fitness.jpg";
import Study from "../assets/education.webp";
import { useNavigate } from "react-router";
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

const ViewAllPubHabits = ({ pubUser }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 text-center my-8 mx-4 sm:mx-10">
        <h2 className="text-3xl font-bold text-[#00b5d9] mb-2">
          Explore Public Habits
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Discover the latest habits shared by our community. Get inspired, stay
          consistent, and build new routines every day.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {pubUser && pubUser.length > 0 ? (
          pubUser.map((habit) => (
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
                onClick={() => navigate(`/habitDetails/${habit._id}`)}
                className="bg-[#00b5d9] text-white font-semibold py-2 rounded-md hover:bg-white hover:text-black transition-all"
              >
                View Details
              </button>
              
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col justify-center items-center bg-gray-900 text-white rounded-2xl shadow-lg p-10 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Please log in to view your habits
            </h2>
            <p className="text-gray-300 mb-6 text-center max-w-md">
              Sign in to start tracking your daily habits.
            </p>
            <button className="bg-[#00b5d9] text-white font-semibold py-2 rounded-md hover:bg-white hover:text-black transition-all">
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPubHabits;




