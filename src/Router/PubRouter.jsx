import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";

import Addhabit from "../Components/Addhabit";
import MyHabits from "../Components/MyHabits";
import Error from "../Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/addHabits", Component: Addhabit },
      {
        path: "/publicHabits",
        Component: Addhabit,
      },
      {
        path: "myHabits",
        Component: MyHabits,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
