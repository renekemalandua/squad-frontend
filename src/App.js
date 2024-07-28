import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/register";
import Navbar from "./components/navBar/navbar";
import LeftBar from "./components/leftBar/leftbar";
import RightBar from "./components/rightBar/rightBar";
import "./styles.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authUserContext";

function App() {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const ProtectedRoutes = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children;
  }

  function Layout(){

    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar/>
          <div style={{display:"flex"}}>
            <LeftBar/>
            <div style={{flex: 6}}>
              <Outlet/>
            </div>
            <RightBar/>
          </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Layout/>
        </ProtectedRoutes>
      ),
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
