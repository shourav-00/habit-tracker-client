Netlify Link:https://bespoke-cassata-1cb972.netlify.app/publicHabits


Project Name: Habit Tracker
Purpose-

.The goal of your project is to help users:

.Track their habits daily.

.Mark habits as complete and maintain a streak history.

.Explore public habits shared by other users.

.Search and filter habits based on category or keywords.

.Update habit details easily.

.This is essentially a full-stack web app with React frontend and Node.js + Express backend, storing data in MongoDB.



Frontend (React)
Pages / Components

.ViewAllPubHabits.jsx

.Displays all public habits in a grid of cards.

.Has search bar (by title/keyword) and category filter (Morning, Work, Fitness, Evening, Study).

.Instant UI update: Uses React state to filter habits without needing backend calls each time.

.Update.jsx

Form to update an existing habit.

.Pre-fills the form with data from GET /UserData/:id.

.Submits updated data with PATCH /UserData/:id.

Other components-

.Login/signup forms (not shown but assumed).

.Habit detail page (/habitDetails/:id) that shows full habit info and allows marking complete.

Data Flow-

.User adds/edits habits → saved in MongoDB AddedHabitCOLL.

.User completes habit → sends PATCH request → updates completionHistory array and streak.

.Public habits page → fetches all public habits from publicHabitsCOLL.

.User can search/filter → updates React state → UI updates instantly.




Special Features-
.Habit streak tracking

.Backend calculates streak using completionHistory array of dates.

.Search and filter

.Instant search on title/description.

.Category filter works together with search.

.Image categorization

.Each habit category has a specific image (Morning → sun, Evening → moon, etc.).

.Prevent duplicate completion

.Same habit can’t be marked complete twice on the same day.



Tech Stack-

.Frontend: React + Tailwind CSS + React Router + React Toastify

.Backend: Node.js + Express + MongoDB

.Other: dotenv for environment variables, fetch API for backend calls