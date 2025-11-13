import React, { useState, useEffect } from "react";
import Morning from "../assets/Sun.jpg";
import Evening from "../assets/moon.jpg";
import Work from "../assets/work.png";
import Fitness from "../assets/fitness.jpg";
import Study from "../assets/education.webp";
import { useNavigate } from "react-router";

const categoryImage = (category) => {
  switch (category) {
    case "Morning": return Morning;
    case "Work": return Work;
    case "Fitness": return Fitness;
    case "Evening": return Evening;
    case "Study": return Study;
    default: return null;
  }
};

const ViewAllPubHabits = () => {
  const navigate = useNavigate();
  const [pubUser, setPubUser] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch habits dynamically based on search & category
  useEffect(() => {
    const fetchHabits = async () => {
      const params = new URLSearchParams();
      if (search) params.append("query", search);
      if (category && category !== "All") params.append("category", category);

      const res = await fetch(`http://localhost:3000/search?${params.toString()}`);
      const data = await res.json();
      setPubUser(data);
    };
    fetchHabits();
  }, [search, category]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 text-center my-8 mx-4 sm:mx-10">
        <h2 className="text-3xl font-bold text-[#00b5d9] mb-2">Explore Public Habits</h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Discover the latest habits shared by our community.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex justify-end gap-4 p-4">
        <input
          type="search"
          placeholder="Search habits..."
          className="border rounded-md px-3 py-1 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded-md px-3 py-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Morning">Morning</option>
          <option value="Work">Work</option>
          <option value="Fitness">Fitness</option>
          <option value="Evening">Evening</option>
          <option value="Study">Study</option>
        </select>
      </div>

      {/* Habit Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {pubUser && pubUser.length > 0 ? (
          pubUser.map((habit) => (
            <div key={habit._id} className="bg-black border border-white rounded-lg shadow-lg p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-xl mb-2">{habit.title}</h3>
                  {categoryImage(habit.category) && <img className="w-12 h-12 rounded-full object-cover" src={categoryImage(habit.category)} alt="" />}
                </div>
                <p className="text-white text-sm mb-1">{habit.description}</p>
                <p className="text-white text-sm mb-1"><span className="font-semibold">Category:</span> {habit.category}</p>
                <p className="text-white text-sm mb-1"><span className="font-semibold">Time:</span> {habit.time}</p>
                <p className="text-white text-sm mb-1"><span className="font-semibold">User:</span> {habit.name}</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">No habits found</h2>
            <p className="text-gray-300 mb-6 text-center max-w-md">Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPubHabits;
