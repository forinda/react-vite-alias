import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "@components/Header";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Home from "@pages/Home";

export const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
