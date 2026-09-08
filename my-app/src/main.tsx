import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Produtos from "./routes/Produtos/index.tsx";
import EditarProdutos from "./routes/EditarProdutos";
import Home from "./routes/Home";
import Error from "./routes/Error";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

createBrowserRouter;
RouterProvider;
