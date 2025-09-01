import Invitacion from "./components/Invitacion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invitacion />,
  },
  {
    path: "/fiesta",
    element: <Invitacion />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
