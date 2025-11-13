import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const HabitDetails = ({ updateHabitInParent }) => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [todayCompleted, setTodayCompleted] = useState(false);

 
  // useEffect(() => {
  //   fetch(`http://localhost:3000/UserData/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched data:", data);
  //       setHabit(data);
  //       const todayStr = new Date().toDateString();
  //       setTodayCompleted(data.completionHistory?.includes(todayStr));
  //     })
  //     .catch((err) => toast.error(err.message));
  // }, [id]);


  useEffect(() => {
  fetch(`http://localhost:3000/publicUserHabit/${id}`)
    .then(res => res.json())
    .then(data => {
      setHabit(data);

      const todayStr = new Date().toDateString();
      setTodayCompleted(data.completionHistory?.includes(todayStr));
    })
    .catch(err => toast.error(err.message));
}, [id]);



  

  // Calculate consecutive streak
  const calculateStreak = (completionHistory = []) => {
    if (!completionHistory?.length) return 0;

    const sortedDates = completionHistory
      .map((d) => new Date(d))
      .sort((a, b) => b - a);

    let streakCount = 0;
    let prevDate = new Date();

    for (let date of sortedDates) {
      const diff = (prevDate - date) / (1000 * 60 * 60 * 24);
      if (diff === 0 || diff === 1) {
        streakCount++;
        prevDate = date;
      } else break;
    }

    return streakCount;
  };

  // Mark habit as complete
  const handleComplete = async () => {
    if (!habit) return;
    const todayStr = new Date().toDateString();

    if (habit.completionHistory?.includes(todayStr)) {
      toast.warning("You can only complete this habit once per day!");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/UserData/${id}/complete`,
        { method: "PATCH" }
      );
      const data = await res.json();

      if (res.ok) {
        setHabit((prev) => ({ ...prev, completionHistory: data.completionHistory }));
        setTodayCompleted(true);
        toast.success("Habit marked complete!");

        // Update parent component instantly
        if (updateHabitInParent) updateHabitInParent(id, data.completionHistory);
      } else {
        toast.warning(data.message || "Failed to complete habit");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!habit) return <p className="text-white">Loading...</p>;

  // Prepare last 30 days for grid
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return { date, completed: habit.completionHistory?.includes(date.toDateString()) };
  });

  const streak = calculateStreak(habit.completionHistory);
  const completionPercent = Math.round(
    (last30Days.filter((d) => d.completed).length / 30) * 100
  );

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
      <p className="mb-2"><strong>Category:</strong> {habit.category}</p>
      <p className="mb-2">
        <strong>Creator:</strong> {habit.creator?.name || "Unknown"} ({habit.creator?.email || "N/A"})
      </p>
      <p className="mb-2"><strong>Streak:</strong> {streak} days</p>

      {/* Progress Bar */}
      <div className="bg-gray-700 h-4 rounded-full overflow-hidden mb-4">
        <div
          className="bg-teal-500 h-full transition-all duration-500"
          style={{ width: `${completionPercent}%` }}
        />
      </div>
      <p className="text-sm mb-4">Completion last 30 days: {completionPercent}%</p>

      {/* 30-day Grid */}
      <div className="grid gap-1 mb-4 md:grid-cols-10 sm:grid-cols-6 xs:grid-cols-5">
        {last30Days.map((day, idx) => {
          const todayStr = new Date().toDateString();
          const isToday = day.date.toDateString() === todayStr;
          return (
            <div
              key={idx}
              title={day.date.toDateString()}
              className={`w-6 h-6 rounded-sm border transition-all duration-500
                ${day.completed ? "bg-green-500" : "bg-gray-800"}
                ${isToday && day.completed ? "border-2 border-green-400" : ""}`}
            ></div>
          );
        })}
      </div>

      <button
        onClick={handleComplete}
        className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300
          ${todayCompleted ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
        disabled={todayCompleted}
      >
        {todayCompleted ? "Completed Today" : "Mark Complete"}
      </button>
    </div>
  );
};

export default HabitDetails;
