import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "./pages/Auth/LoginForm";
import { Signup } from "./pages/Auth/SignUpForm";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { MyPolls } from "./pages/Dashboard/MyPolls";
import { CreatePolls } from "./pages/Dashboard/CreatePoll";
import { VotedPolls } from "./pages/Dashboard/VotedPolls";
import { Booksmarks } from "./pages/Dashboard/Bookmarks";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "",
      element: <RootLayout />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/createpoll", element: <CreatePolls /> },
        { path: "/votedpoll", element: <VotedPolls /> },
        { path: "/mypolls", element: <MyPolls /> },
        { path: "/bookmarks", element: <Booksmarks /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
