import { Link } from "react-router-dom";
import "./register.scss"

function Register() {
  return (
    <div className="register">
      <div className="card">

      <div className="left">
          <h1>Criar conta</h1>
          <form action="">
            <input type="text" placeholder="nome completo"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="palavra passe"/>
            <input type="password" placeholder="confirme a palavra passe"/>
            <button>Concluido</button>
          </form>
        </div>

        <div className="rigth">
          <h1>Squad</h1>
          <p>
            Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. Numquam, soluta. 
            Repellat nihil modi harum veritatis, 
            excepturi pariatur at quas dolore.
          </p>
          <span>Tem uma conta?</span>
          <Link to= "/login">
          <button>Entrar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register;