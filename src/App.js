import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppNative from "./AppNative";
function App() {
  const router = createBrowserRouter([
    {
      path: "minis",
      element: <AppNative />,
      errorElement: <></>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <h1>Minis</h1>
      <a href="minis://abc?ab=100">Open</a>
    </div>
  );
}

export default App;
