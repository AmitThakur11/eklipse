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
      <button onClick={() => {}}>Open App</button>
    </div>
  );
}

export default App;
