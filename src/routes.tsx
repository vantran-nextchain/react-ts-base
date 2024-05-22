import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ],
  {
    basename: "/store",
  }
);

export const AppRouter = () => {
  if (window.location.pathname === "/") window.location.replace("/store");
  return <RouterProvider router={router} />;
};
