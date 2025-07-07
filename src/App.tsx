import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Page not found</div>,
    lazy: async () => ({
      Component: (await import("./pages/MainPage")).default,
    }),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
