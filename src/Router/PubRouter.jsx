import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";



import Error from "../Components/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PvRouter from "./PvRouter";
import Addhabit from "../Pages/AddHabit";
import MyHabits from "../Pages/MyHabits";
import PublicHabits from "../Pages/PublicHabits";
import HabitDetails from "../Components/HabitDetails";
import Update from "../Pages/Update";
import Delete from "../Pages/Delete";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/addHabits", 
        element: <PvRouter>
          <Addhabit></Addhabit>
        </PvRouter> },
      {
        path: `/publicHabits`,
        Component:PublicHabits,
      },
      {
        path: "myHabits",
        element:<PvRouter>
          <MyHabits></MyHabits>
        </PvRouter>
      },
      {
        path: `habitDetails/:id`,
        element:<PvRouter>
          <HabitDetails></HabitDetails>
        </PvRouter>
      },
       {
        path: "update/:id",
        element:<PvRouter>
          <Update></Update>
        </PvRouter>
      },
      {
        path: "delete",
        element:<PvRouter>
          <Delete></Delete>
        </PvRouter>
      },

      {
        path: "/login",
        Component:Login,
       
      },

      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
