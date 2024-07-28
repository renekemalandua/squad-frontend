import { Link } from "react-router-dom";
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authUserContext";

function Login() {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bem vindo de Volta</h1>
          <p>
            Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. Numquam, soluta. 
            Repellat nihil modi harum veritatis, 
            excepturi pariatur at quas dolore.
          </p>
          <span>Não tem uma conta?</span>

          <Link to= "/register">
          <button>Cadastrar</button>
          </Link>

        </div>
        <div className="rigth">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Palavra Passe"/>
            <button onClick={handleLogin}>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;