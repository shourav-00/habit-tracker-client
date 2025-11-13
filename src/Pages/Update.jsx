// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { AuthContext } from '../Context/AuthContext';
// import { toast } from 'react-toastify';

// const Update = () => {

//     const {id}=useParams();
//      const [habitInfo, setHabitInfo] = useState(null);
//      useEffect(()=>{
//         fetch(`http://localhost:3000/UserData/${id}`)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             setHabitInfo(data);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//      },[id])

//     const handleUpdate=(e)=>{
//         e.preventDefault();
//        const updatedHabit = {
//       title: e.target.title.value,
//       description: e.target.description.value,
//       category: e.target.category.value,
//       time: e.target.time.value,
//       image: e.target.image?.files[0]?.name || habitInfo.image || null,
//       email: habitInfo.email,
//       name: habitInfo.name,
//     };

//     fetch(`http://localhost:3000/UserData/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedHabit),
//       }
//     .then(res=>res.json())
//     .catch(err=>{
//          toast.error(err.message);
//     })
//     );

//     return (
//   <div className="flex justify-center items-center min-h-screen bg-gray-950 p-6">
//       <div className="w-full max-w-xl bg-gray-900 rounded-lg p-6 shadow-lg">
//         <h2 className="text-white font-bold text-2xl mb-6 text-center">
//          Update Details
//         </h2>

//         <form onSubmit={handleUpdate} className="space-y-5">
//           {/* Habit Title */}
//           <div>
//             <label className="text-white block mb-1">Habit Title</label>
//             <input
//               type="text"
//               placeholder="Enter your habit title"
//               name="title"
//               required
//               className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="text-white block mb-1">Description</label>
//             <textarea
//               placeholder="Describe your habit"
//               name="description"
//               required
//               className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               rows="3"
//             ></textarea>
//           </div>

//           {/* Category Dropdown */}
//           <div>
//             <label className="text-white block mb-1">Category</label>
//             <select
//               name="category"
//               required
//               className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             >
//               <option value="">Select Category</option>
//               <option value="Morning">Morning</option>
//               <option value="Work">Work</option>
//               <option value="Fitness">Fitness</option>
//               <option value="Evening">Evening</option>
//               <option value="Study">Study</option>
//             </select>
//           </div>

//           {/* Reminder Time */}
//           <div>
//             <label className="text-white block mb-1">Reminder Time</label>
//             <input
//               type="time"
//               name="time"
//               required
//               className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>

//           {/* Upload Image */}
//           <div>
//             <label className="text-white block mb-1">
//               Upload Image (Optional)
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               name="image"
//               className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-300 px-3 py-2 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-700"
//             />
//           </div>

//           {/* User Info (Read Only) */}
//           <div className="flex flex-col md:flex-row gap-3">
//             <div className="flex-1">
//               <label className="text-white block mb-1">User Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 readOnly
//                 value={habitInfo?.name || ""}
//                 className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-400 px-3 py-2"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="text-white block mb-1">User Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 readOnly

//                 value={habitInfo?.email || ''}
//                 className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-400 px-3 py-2"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-teal-500 text-white rounded-md px-6 py-2 font-semibold hover:bg-teal-600 transition-all duration-300"
//             >
//               Complete
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//     );
// };

// export default Update;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Update = () => {
  const { id } = useParams();
  const [habitInfo, setHabitInfo] = useState(null);

  // Fetch habit info by id
  useEffect(() => {
    fetch(`http://localhost:3000/UserData/${id}`)
      .then((res) => res.json())
      .then((data) => setHabitInfo(data))
      .catch((err) => console.log(err));
  }, [id]);

  // Handle update form submission
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedHabit = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      time: e.target.time.value,
      image: e.target.image?.files[0]?.name || habitInfo.image || null,
      email: habitInfo.email,
      name: habitInfo.name,
    };

    fetch(`http://localhost:3000/UserData/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Habit updated successfully!");
      })
      .catch((err) => {
        alert("Update failed: " + err.message);
      });
  };

  if (!habitInfo)
    return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 p-6">
      <div className="w-full max-w-xl bg-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-white font-bold text-2xl mb-6 text-center">
          Update Details
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Habit Title */}
          <div>
            <label className="text-white block mb-1">Habit Title</label>
            <input
              type="text"
              name="title"
              defaultValue={habitInfo.title}
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-white block mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={habitInfo.description}
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="3"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="text-white block mb-1">Category</label>
            <select
              name="category"
              defaultValue={habitInfo.category}
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Category</option>
              <option value="Morning">Morning</option>
              <option value="Work">Work</option>
              <option value="Fitness">Fitness</option>
              <option value="Evening">Evening</option>
              <option value="Study">Study</option>
            </select>
          </div>

          {/* Reminder Time */}
          <div>
            <label className="text-white block mb-1">Reminder Time</label>
            <input
              type="time"
              name="time"
              defaultValue={habitInfo.time}
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="text-white block mb-1">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-300 px-3 py-2 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-700"
            />
          </div>

          {/* User Info (Read Only) */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="text-white block mb-1">User Name</label>
              <input
                type="text"
                name="name"
                readOnly
                value={habitInfo.name}
                className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-400 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="text-white block mb-1">User Email</label>
              <input
                type="email"
                name="email"
                readOnly
                value={habitInfo.email}
                className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-400 px-3 py-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 text-white rounded-md px-6 py-2 font-semibold hover:bg-teal-600 transition-all duration-300"
            >
              Complete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
