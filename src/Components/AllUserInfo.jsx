import React from "react";
import { toast } from "react-toastify";
import Morning from "../assets/Sun.jpg";
import Evening from "../assets/moon.jpg";
import Work from "../assets/work.png";
import Fitness from "../assets/fitness.jpg";
import Study from "../assets/education.webp";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';

const AllUserInfo = ({ userAllData,setuserAllData}) => {
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
  const navigate=useNavigate()
  const handleUpdate=(id)=>{
    
    navigate(`/update/${id}`)
  }
 const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });

  if (result.isConfirmed) {
    try {
      const res = await fetch(`http://localhost:3000/UserData/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setuserAllData(prev => prev.filter(habit => habit._id !== id));
        toast.success("Habit deleted successfully");
      } else {
        toast.error("Failed to delete habit");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }
};



  const handleComplete=(id)=>{
    navigate(`/habitDetails/${id}`)
  }
  // const handleHabitDetails=()=>{
  //    navigate("/update")
  // }
  

  return (
    <div className=" sm:p-2 py-10 mx-auto max-w-6xl text-white">
      {/* Heading Section */}
      <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 text-center my-8 mx-4 sm:mx-10">
        <h2 className="text-3xl font-bold text-[#00b5d9] mb-2">Update</h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Track, update, and manage your daily goals — stay consistent and
          improve every day.
        </p>
      </div>

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
                <td className="px-4 py-3 sm:table-cell block sm:border-0 border-b border-gray-700">
                  <p className="text-white font-semibold text-lg sm:text-base">
                    {habit.title}
                  </p>
                </td>

                <td className="px-4 py-3 sm:table-cell block sm:border-0 border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    {categoryImage(habit.category) && (
                      <img
                        src={categoryImage(habit.category)}
                        alt={habit.category}
                        className="w-8 h-8 rounded-full object-cover border border-gray-600"
                      />
                    )}
                    <p className="text-gray-300 font-medium">
                      {habit.category}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-3 sm:table-cell block sm:border-0 border-b border-gray-700 text-center">
                  {habit.currentStreak || 0} days
                </td>

                <td className="px-4 py-3 sm:table-cell block sm:border-0 border-b border-gray-700 text-center">
                  {new Date(habit.createdAt).toLocaleDateString()}
                </td>

                <td className="px-4 py-3 flex justify-center sm:justify-center gap-3 flex-wrap mt-2">
                  <button
                    onClick={()=>handleComplete(`${habit._id}`)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Complete
                  </button>
                  <button value='button'
                    onClick={()=>handleUpdate(`${habit._id}`)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Update
                  </button>

                  <button type='button'
                  onClick={()=>handleDelete(`${habit._id}`)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Delete
                  </button>
                </td>

                <td className="block sm:hidden px-4 py-3 text-gray-400 text-sm border-t border-gray-700">
                  <div className="flex justify-between">
                    <span>
                      <span className="font-semibold text-gray-300">
                        Streak:
                      </span>{" "}
                      {habit.currentStreak || 0} days
                    </span>
                    <span>
                      <span className="font-semibold text-gray-300">
                        Created:
                      </span>{" "}
                      {new Date(habit.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserInfo;
