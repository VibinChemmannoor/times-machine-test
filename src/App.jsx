import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
