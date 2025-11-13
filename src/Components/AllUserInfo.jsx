import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import Morning from "../assets/Sun.jpg";
import Evening from "../assets/moon.jpg";
import Work from "../assets/work.png";
import Fitness from "../assets/fitness.jpg";
import Study from "../assets/education.webp";

const AllUserInfo = ({ userAllData, setuserAllData }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  // Streak calculation based on consecutive days
  const calculateStreak = (history = []) => {
    if (!history.length) return 0;
    const dates = history.map((d) => new Date(d)).sort((a, b) => b - a);
    let streak = 0;
    let prev = new Date();
    for (let date of dates) {
      const diff = Math.floor((prev - date) / (1000 * 60 * 60 * 24));
      if (diff === 0 || diff === 1) {
        streak++;
        prev = date;
      } else break;
    }
    return streak;
  };

  // Complete habit
  const handleComplete = async (habit) => {
    try {
      const res = await fetch(
        `http://localhost:3000/UserData/${habit._id}/complete`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Failed to complete habit");
        return;
      }

      const updatedHabit = {
        ...habit,
        completionHistory: data.completionHistory,
      };
      setuserAllData((prev) =>
        prev.map((h) => (h._id === habit._id ? updatedHabit : h))
      );

      // Only open modal without changing background table
      setSelectedHabit(updatedHabit);
      setIsModalOpen(true);
      toast.success("Habit marked complete!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleUpdate = (id) => navigate(`/update/${id}`);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/UserData/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setuserAllData((prev) => prev.filter((h) => h._id !== id));
          toast.success("Habit deleted successfully");
        } else toast.error("Failed to delete habit");
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="sm:p-2 py-10 mx-auto max-w-6xl text-white">
      {/* Heading */}
      <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 text-center my-8 mx-4 sm:mx-10">
        <h2 className="text-3xl font-bold text-[#00b5d9] mb-2">Update</h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Track, update, and manage your daily goals — stay consistent and
          improve every day.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-700 bg-gray-900 my-10">
        <table className="w-full text-left text-gray-200 border-collapse">
          <thead className="bg-gray-800 text-gray-100 uppercase text-sm hidden sm:table-header-group">
            <tr>
              <th className="px-4 py-5 w-[25%]">Title</th>
              <th className="px-4 py-5 w-[20%]">Category</th>
              <th className="px-4 py-5 w-[15%] text-center">Streak</th>
              <th className="px-4 py-5 w-[15%] text-center">Created</th>
              <th className="px-4 py-5 w-[25%] text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {userAllData.map((habit) => (
              <tr
                key={habit._id}
                className="hover:bg-gray-800 transition-all duration-300 sm:table-row block sm:mb-0 mb-6 rounded-xl sm:rounded-none mx-2 sm:mx-0 my-2 sm:my-0"
              >
                <td className="px-4 py-3">{habit.title}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  {categoryImage(habit.category) && (
                    <img
                      src={categoryImage(habit.category)}
                      alt={habit.category}
                      className="w-8 h-8 rounded-full object-cover border border-gray-600"
                    />
                  )}
                  <p>{habit.category}</p>
                </td>
                <td className="px-4 py-3 text-center">
                  {calculateStreak(habit.completionHistory)} days
                </td>
                <td className="px-4 py-3 text-center">
                  {new Date(habit.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 flex justify-center gap-3 flex-wrap mt-2">
                  <button
                    onClick={() => handleComplete(habit)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => handleUpdate(habit._id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded-lg text-sm font-semibold"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedHabit && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-xl max-w-md w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedHabit.title}</h2>
            <p className="text-gray-300 mb-2">{selectedHabit.description}</p>
            <p className="mb-1">
              <strong>Category:</strong> {selectedHabit.category}
            </p>
            <p className="mb-1">
              <strong>Creator:</strong>{" "}
              {selectedHabit.creator?.name || "Unknown"}
            </p>
            <p className="mb-4">
              <strong>Streak:</strong>{" "}
              {calculateStreak(selectedHabit.completionHistory)} days
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUserInfo;
