import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import { RouterProvider } from "react-router/dom";
import { RouterProvider } from "react-router-dom"; // ✅ correct

import { router } from "./Routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
