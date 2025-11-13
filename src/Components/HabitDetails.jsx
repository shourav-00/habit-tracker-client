// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { toast } from "react-toastify";

// const HabitDetails = () => {
//   const { id } = useParams();
//   const [habit, setHabit] = useState(null);
//   const [todayCompleted, setTodayCompleted] = useState(false);

//   // Fetch habit details
//   useEffect(() => {
//     fetch(`http://localhost:3000/UserData/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const habitData = { ...data, completionHistory: data.completionHistory || [] };
//         setHabit(habitData);

//         const todayStr = new Date().toDateString();
//         setTodayCompleted(habitData.completionHistory.includes(todayStr));
//       })
//       .catch((err) => toast.error(err.message));
//   }, [id]);

//   // Mark Complete
//   const handleComplete = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/UserData/${id}/complete`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();

//       if (res.ok) {
//         const updatedCompletion = data.completionHistory || [];
//         setHabit((prev) => ({ ...prev, completionHistory: updatedCompletion }));
//         setTodayCompleted(updatedCompletion.includes(new Date().toDateString()));
//         toast.success("Marked complete!");
//       } else {
//         toast.error(data.message || "Failed to complete habit");
//       }
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   if (!habit) return <p className="text-white">Loading...</p>;

//   const completionHistory = habit.completionHistory || [];

//   // --- Utilities ---
//   const last30Days = Array.from({ length: 30 }, (_, i) => {
//     const date = new Date();
//     date.setDate(date.getDate() - (29 - i));
//     const completed = completionHistory.includes(date.toDateString());
//     return { date, completed };
//   });

//   const streak = calculateStreak(completionHistory);
//   const completionPercent = Math.round(
//     (last30Days.filter((d) => d.completed).length / 30) * 100
//   );

//   function calculateStreak(history = []) {
//     if (!history.length) return 0;

//     const sortedDates = history.map((d) => new Date(d)).sort((a, b) => b - a);
//     let streakCount = 0;
//     let prevDate = new Date();
//     for (let date of sortedDates) {
//       const prevDateStr = prevDate.toDateString();
//       const dateStr = date.toDateString();
//       if (dateStr === prevDateStr || dateStr === new Date(prevDate.setDate(prevDate.getDate() - 1)).toDateString()) {
//         streakCount++;
//         prevDate = date;
//       } else break;
//     }
//     return streakCount;
//   }

//   return (
//     <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
//       <h1 className="text-2xl font-bold mb-2">{habit.title}</h1>
//       <p className="text-gray-300 mb-4">{habit.description}</p>
//       {habit.image && (
//         <img src={habit.image} alt={habit.title} className="w-full mb-4 rounded-lg" />
//       )}
//       <p className="mb-2"><strong>Category:</strong> {habit.category}</p>
//       <p className="mb-2"><strong>Creator:</strong> {habit.creator?.name || "Unknown"} ({habit.creator?.email || "N/A"})</p>
//       <p className="mb-2"><strong>Streak:</strong> {streak} days</p>

//       {/* Progress Bar */}
//       <div className="bg-gray-700 h-4 rounded-full overflow-hidden mb-4">
//         <div
//           className="bg-teal-500 h-full transition-all duration-500"
//           style={{ width: `${completionPercent}%` }}
//         ></div>
//       </div>
//       <p className="text-sm mb-4">Completion last 30 days: {completionPercent}%</p>

//       {/* 30-day Streak Grid */}
//       <div className="grid gap-1 mb-4
//                       md:grid-cols-10 md:grid-rows-3
//                       sm:grid-cols-6 sm:grid-rows-5
//                       xs:grid-cols-5 xs:grid-rows-6">
//         {last30Days.map((day, idx) => {
//           const todayStr = new Date().toDateString();
//           const isToday = day.date.toDateString() === todayStr;

//           return (
//             <div
//               key={idx}
//               title={day.date.toDateString()}
//               className={`w-6 h-6 rounded-sm border transition-all duration-500
//                 ${day.completed ? "bg-green-500" : "bg-gray-800"}
//                 ${isToday && day.completed ? "border-2 border-green-400" : ""}`}
//             ></div>
//           );
//         })}
//       </div>

//       {/* Mark Complete Button */}
//       <button
//         onClick={handleComplete}
//         className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
//           todayCompleted
//             ? "bg-green-400 cursor-not-allowed"
//             : "bg-green-500 hover:bg-green-600"
//         }`}
//         disabled={todayCompleted}
//       >
//         {todayCompleted ? "Completed Today" : "Mark Complete"}
//       </button>
//     </div>
//   );
// };

// export default HabitDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);

  // Fetch habit details
  useEffect(() => {
    fetch(`http://localhost:3000/UserData/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure completionHistory exists and all dates are in YYYY-MM-DD
        const history =
          data.completionHistory?.map((d) =>
            new Date(d).toISOString().split("T")[0]
          ) || [];
        setHabit({ ...data, completionHistory: history });
      })
      .catch((err) => toast.error(err.message));
  }, [id]);

  // Mark Complete
  const handleComplete = async () => {
    try {
      const todayStr = new Date().toISOString().split("T")[0];

      // Prevent double completion
      if (habit.completionHistory.includes(todayStr)) {
        toast.info("Already completed today!");
        return;
      }

      const res = await fetch(
        `http://localhost:3000/UserData/${id}/complete`,
        { method: "PATCH" }
      );
      const data = await res.json();

      if (res.ok) {
        // Update state with new completionHistory from backend
        const updatedHistory = data.completionHistory.map((d) =>
          new Date(d).toISOString().split("T")[0]
        );
        setHabit((prev) => ({ ...prev, completionHistory: updatedHistory }));
        toast.success("Marked complete!");
      } else {
        toast.error(data.message || "Failed to complete habit");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!habit) return <p className="text-white">Loading...</p>;

  // --- Last 30 days streak grid ---
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    const dateStr = date.toISOString().split("T")[0];

    const completed = habit.completionHistory.includes(dateStr);
    return { date, completed, dateStr };
  });

  // Calculate current streak
  const calculateStreak = (history = []) => {
    if (!history.length) return 0;

    const sorted = [...history].sort((a, b) => new Date(b) - new Date(a));
    let streak = 0;
    let prevDate = new Date();
    for (let d of sorted) {
      const date = new Date(d);
      const prevStr = prevDate.toISOString().split("T")[0];
      const currStr = date.toISOString().split("T")[0];

      if (currStr === prevStr) {
        streak++;
        prevDate = new Date(date);
        prevDate.setDate(prevDate.getDate() - 1);
      } else break;
    }
    return streak;
  };

  const streak = calculateStreak(habit.completionHistory);
  const completionPercent = Math.round(
    (last30Days.filter((d) => d.completed).length / 30) * 100
  );

  const todayStr = new Date().toISOString().split("T")[0];
  const todayCompleted = habit.completionHistory.includes(todayStr);

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{habit.title}</h1>
      <p className="text-gray-300 mb-4">{habit.description}</p>
      {habit.image && (
        <img
          src={habit.image}
          alt={habit.title}
          className="w-full mb-4 rounded-lg"
        />
      )}
      <p className="mb-2">
        <strong>Category:</strong> {habit.category}
      </p>
      <p className="mb-2">
        <strong>Creator:</strong> {habit.creator?.name || "Unknown"} (
        {habit.creator?.email || "N/A"})
      </p>
      <p className="mb-2">
        <strong>Streak:</strong> {streak} days
      </p>

      {/* Progress Bar */}
      <div className="bg-gray-700 h-4 rounded-full overflow-hidden mb-4">
        <div
          className="bg-teal-500 h-full transition-all duration-500"
          style={{ width: `${completionPercent}%` }}
        ></div>
      </div>
      <p className="text-sm mb-4">Completion last 30 days: {completionPercent}%</p>

      {/* 30-day Streak Grid */}
      <div className="grid gap-1 md:grid-cols-10 md:grid-rows-3 sm:grid-cols-6 sm:grid-rows-5 xs:grid-cols-5 xs:grid-rows-6 mb-4">
        {last30Days.map((day, idx) => (
          <div
            key={idx}
            title={day.date.toDateString()}
            className={`w-6 h-6 rounded-sm border transition-all duration-500 ${
              day.completed ? "bg-green-500" : "bg-gray-800"
            }`}
          ></div>
        ))}
      </div>

      {/* Mark Complete Button */}
      <button
        onClick={handleComplete}
        className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
          todayCompleted
            ? "bg-green-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
        disabled={todayCompleted}
      >
        {todayCompleted ? "Completed Today" : "Mark Complete"}
      </button>
    </div>
  );
};

export default HabitDetails;
