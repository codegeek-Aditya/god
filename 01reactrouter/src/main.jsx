import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index";
import Home from "./Header/components/Home/Home";
import About from "./Header/components/About/About";
import ContactUs from "./Header/components/Contact/ContactUs";

import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="contactUs" element={<ContactUs/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
