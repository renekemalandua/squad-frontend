import "./leftBar.scss"
import DefaultAvatar from "../../assets/img/default_avatar.jpg"
import Friends from "../../assets/img/1.png"
import Groups from "../../assets/img/2.png"
import Market from "../../assets/img/3.png"
import Watch from "../../assets/img/4.png"
import Memories from "../../assets/img/5.png"
import Events from "../../assets/img/6.png"
import Gaming from "../../assets/img/7.png"
import Gallery from "../../assets/img/8.png"
import Videos from "../../assets/img/9.png"
import Messages from "../../assets/img/10.png"
import Tutorials from "../../assets/img/11.png"
import Courses from "../../assets/img/12.png"
import Found from "../../assets/img/13.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authUserContext"


function LeftBar() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="conteiner">
        <div className="menu">

          <div className="user">
            <img src={currentUser.photo} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
              <img src={Friends} alt="" />
              <span>Amigos</span>
          </div>
          <div className="item">
              <img src={Groups} alt="" />
              <span>Grupos</span>
          </div>
          <div className="item">
              <img src={Market} alt="" />
              <span>Mercado</span>
          </div>
          <div className="item">
              <img src={Watch} alt="" />
              <span>Assistir</span>
          </div>
          <div className="item">
              <img src={Memories} alt="" />
              <span>Memorias</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Seus Atalhos</span>
          <div className="item">
              <img src={Events} alt="" />
              <span>Eventos</span>
          </div>
          <div className="item">
              <img src={Gaming} alt="" />
              <span>Jogos</span>
          </div>
          <div className="item">
              <img src={Gallery} alt="" />
              <span>Fotos</span>
          </div>
          <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
          </div>
          <div className="item">
              <img src={Messages} alt="" />
              <span>Mensagens</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Outros</span>
          <div className="item">
              <img src={Found} alt="" />
              <span>Encontrar</span>
          </div>
          <div className="item">
              <img src={Tutorials} alt="" />
              <span>Tutoriais</span>
          </div>
          <div className="item">
              <img src={Courses} alt="" />
              <span>Cursos</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LeftBar;
