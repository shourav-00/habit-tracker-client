import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const AddHabit = () => {
  const { user } = use(AuthContext);
  const handleAddHabit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const time = e.target.time.value;
    const image = e.target.image.files[0];
    const name = e.target.name.value;
    const email = e.target.email.value;
    //console.log(title, description, time, category, image, name, email);

    const addHabit = {
      title: title,
      description: description,
      category: category,
      time: time,
      image: image,
      name: name,
      email: email,
      createdAt: new Date() //hahahaha
    };

    fetch('https://shourav-havittracker-server.onrender.com/addHabits',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(addHabit)
    })
    .then(res=>
      res.json()
      )
    .then(data=>{
        //console.log(data);
        toast.success("Successfully added")
    })
    .catch(err=>{
      //toast.error(err.message);
    })
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 p-6">
      <div className="w-full max-w-xl bg-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-white font-bold text-2xl mb-6 text-center">
          Add New Habit
        </h2>

        <form onSubmit={handleAddHabit} className="space-y-5">
      
          <div>
            <label className="text-white block mb-1">Habit Title</label>
            <input
              type="text"
              placeholder="Enter your habit title"
              name="title"
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

       
          <div>
            <label className="text-white block mb-1">Description</label>
            <textarea
              placeholder="Describe your habit"
              name="description"
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="3"
            ></textarea>
          </div>

    
          <div>
            <label className="text-white block mb-1">Category</label>
            <select
              name="category"
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

          <div>
            <label className="text-white block mb-1">Reminder Time</label>
            <input
              type="time"
              name="time"
              required
              className="w-full bg-gray-800 rounded-md border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

      
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


          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="text-white block mb-1">User Name</label>
              <input
                type="text"
                name="name"
                required
                readOnly
                value={user.displayName}
                className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-400 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="text-white block mb-1">User Email</label>
              <input
                type="email"
                name="email"
                readOnly
                value={user.email}
                className="w-full bg-gray-800 rounded-md border border-gray-700 text-gray-400 px-3 py-2"
              />
            </div>
          </div>


          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 text-white rounded-md px-6 py-2 font-semibold hover:bg-teal-600 transition-all duration-300"
            >
              Save Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
