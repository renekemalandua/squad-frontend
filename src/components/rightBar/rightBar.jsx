import "./rightBar.scss"

import DefaultAvatar from "../../assets/img/default_avatar.jpg"

function RightBar() {
  return (
    <div className="rightBar">
      <div className="conteiner">
        <div className="item">
          <span>Sugestões de amizades</span>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Remover</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Remover</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Actividades Recentes</span>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <p>
                <span>Jane Doe</span> alterou a sua foto de perfil
              </p>
            </div>
            <span> 1 min</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <p>
                <span>Jane Doe</span> te fez  um pedido de amizade
              </p>
            </div>
            <span>1 min</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <p>
                <span>Jane Doe</span> reagiu a sua foto de perfil
              </p>
            </div>
            <span> 1 min</span>
          </div>
        </div>
        <div className="item">
          <span>Usuarios Activos</span>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DefaultAvatar} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default RightBar
