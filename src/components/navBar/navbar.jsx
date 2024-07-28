import "./navBar.scss";
import DefaultAvatar from "../../assets/img/default_avatar.jpg"

import { HomeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { WbSunnyOutlined } from "@mui/icons-material";
import { GridViewOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material"; 
import { NotificationsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authUserContext";


function Navbar() {
  
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="left">
          <Link to= "/" style={{textDecoration:"none"}}>
            <span>Squad</span>
          </Link>
          <HomeOutlined/>
          {darkMode ? (
              <WbSunnyOutlined onClick={toggle} />
            ) : (
              <DarkModeOutlined onClick={toggle} />
          )}
          <GridViewOutlined/>
          <div className="seacrh">
            <SearchOutlined/>
            <input type="text" placeholder="pesquisar..." />
          </div>
      </div>
      <div className="right">
          <PersonOutlined/>
          <EmailOutlined/>
          <NotificationsOutlined/>

          <div className="user">
            <img src={currentUser.photo} alt="" />
            <span>{currentUser.name}</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar
