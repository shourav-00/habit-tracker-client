import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [todayCompleted, setTodayCompleted] = useState(false);

  // Fetch habit dynamically
  useEffect(() => {
    fetch(`http://localhost:3000/habitDetails/${id}`)
      .then(res => res.json())
      .then(data => {
        setHabit(data);
        const todayStr = new Date().toDateString();
        setTodayCompleted(data.completionHistory?.includes(todayStr));
      })
      .catch(err => toast.error(err.message));
  }, [id]);

  // Prepare last 30 days for UI
  const getLast30Days = (completionHistory = []) => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dateStr = date.toDateString();
      const completed = completionHistory?.includes(dateStr);
      return { date, completed };
    });
  };

  // Mark habit complete
  const handleComplete = async () => {
    if (!habit) return;
    const todayStr = new Date().toDateString();

    if (todayCompleted) {
      toast.warning("Already completed today!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/habitDetails/${id}/complete`, {
        method: "PATCH"
      });
      const data = await res.json();

      if (res.ok) {
        setHabit(prev => ({ ...prev, completionHistory: data.completionHistory }));
        setTodayCompleted(true);
        toast.success("Habit marked complete!");
      } else {
        toast.warning(data.message || "Failed to complete habit");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!habit) return <p className="text-white">Loading...</p>;

  const last30Days = getLast30Days(habit.completionHistory);
  const streak = (() => {
    if (!habit.completionHistory?.length) return 0;
    const sorted = habit.completionHistory
      .map(d => new Date(d))
      .sort((a, b) => b - a);

    let streakCount = 0;
    let prevDate = new Date();

    for (let date of sorted) {
      const diff = (prevDate - date) / (1000 * 60 * 60 * 24);
      if (diff === 0 || diff === 1) {
        streakCount++;
        prevDate = date;
      } else break;
    }
    return streakCount;
  })();

  const completionPercent = Math.round((last30Days.filter(d => d.completed).length / 30) * 100);

  const getStreakBadge = days => {
    if (days >= 20) return "🏆 20+ days!";
    if (days >= 10) return "🎖 10+ days!";
    return "🔹 Less than 10 days";
  };

  return (
    <div className="py-12">

    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">

     
      <h1 className="text-2xl font-bold mb-2">{habit.title}</h1>
      <p className="text-gray-300 mb-4">{habit.description}</p>
      {habit.image && (
        <img src={habit.image} alt={habit.title} className="w-full mb-4 rounded-lg" />
      )}
      <p className="mb-2"><strong>Category:</strong> {habit.category}</p>
      <p className="mb-2">
        <strong>Creator:</strong> {habit.name } 

      </p>
      <p className="mb-2">
          <strong>Details:</strong> {habit.email}
      </p>
      <p className="mb-2"><strong>Streak:</strong> {streak} days</p>
      <p className="mb-2">{getStreakBadge(streak)}</p>

      {/* Progress Bar */}
      <div className="bg-gray-700 h-4 rounded-full overflow-hidden mb-4">
        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: `${completionPercent}%` }}
        />
      </div>
      <p className="text-sm mb-4">Completion last 30 days: {completionPercent}%</p>

      {/* 30-day Grid */}
      <div className="grid gap-1 mb-4 grid-cols-10">
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

      {/* Streak milestones */}
      <div className="mt-4 text-sm text-gray-300">
        <p>Streak Milestones:</p>
        <ul className="list-disc ml-5">
          <li> 🔥 Less than 10 days</li>
          <li>🎖 10+ days</li>
          <li>🏆 20+ days</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default HabitDetails;
