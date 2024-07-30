import "./profile.scss"
import {FacebookTwoTone} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Instagram} from "@mui/icons-material";
import {Pinterest} from "@mui/icons-material";
import {Twitter} from "@mui/icons-material";
import {Place} from "@mui/icons-material";
import {Language} from "@mui/icons-material";
import {EmailOutlined} from "@mui/icons-material";
import {MoreVert} from "@mui/icons-material";
import Posts from "../../components/posts/posts";

function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img 
         src = "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
         alt=""
         className="cover"
        />
        <img 
         src = "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
         alt=""
         className="photo"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfor">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone />
            </a>
            <a href="http://facebook.com">
              <LinkedIn />
            </a>
            <a href="http://facebook.com">
              <Instagram />
            </a>
            <a href="http://facebook.com">
              <Pinterest />
            </a>
            <a href="http://facebook.com">
              <Twitter />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className ="info">
            <div className="item">
                <Place/>
                <span>AO</span>
            </div>
            <div className="item">
                <Language/>
                <span>kemalandua</span>
            </div>
            </div>
            <button>Seguir</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile;