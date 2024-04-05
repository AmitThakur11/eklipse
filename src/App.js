import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppNative from "./AppNative";
function App() {
  const router = createBrowserRouter([
    {
      path: "/App",
      element: <AppNative />,
      errorElement: <></>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
