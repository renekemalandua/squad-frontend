import "./comments.scss";

import { useContext } from "react";
import { AuthContext } from "../../context/authUserContext";

function Comments(){

    const {currentUser} = useContext(AuthContext);

    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740",
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740",
         },
    ];

    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.photo} alt="" />
                <input type="text" placeholder = "escreva um comentario..."/>
                <button>Comentar</button>
            </div>
            {comments.map(comment=>(
                <div className="comment" key={comment.id}>
                    <img src={comment.photo} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 min atras</span>
                </div>
            ))}
        </div>
    )
}

export default Comments