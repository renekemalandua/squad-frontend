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


function Navbar() {
  return (
    <div className="navBar">
      <div className="left">
          <Link to= "/" style={{textDecoration:"none"}}>
            <span>Squad</span>
          </Link>
          <HomeOutlined/>
          <DarkModeOutlined/>
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
            <img src={DefaultAvatar} alt="" />
            <span>John Doe</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar
