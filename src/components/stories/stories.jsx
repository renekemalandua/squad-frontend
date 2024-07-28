import React, { useContext } from 'react'
import "./stories.scss"
import { AuthContext } from '../../context/authUserContext';

function Stories() {
    const {currentUser} = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "John Doe",
            photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
        },
        {
            id: 2,
            name: "Johnny Doe",
            photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
        },
        {
            id: 3,
            name: "Jean Doe",
            photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
        },
        {
            id: 4,
            name: "Gemini Doe",
            photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
        }
    ]

    return (
        <div className='stories'>
            <div className="story">
                <img src={currentUser.photo} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.photo} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories;
