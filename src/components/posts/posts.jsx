import React from 'react'
import "./posts.scss"
import Post from '../post/post'

function Posts() {

  const posts = [
    {
        id: 1,
        name: "John Doe",
        userId: 1,
        photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740",
        desc:"Abcdefghijklmnopqrstuvwxyz-Abcdefghijklmnopqrstuvwxyz-Abcdefghijklmnopqrstuvwxyz",
        img: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740"
    },
    {
        id: 2,
        name: "Thomas Shelby",
        userId: 2,
        photo: "https://img.freepik.com/fotos-gratis/pessoas-felizes-dancando-com-garrafas-de-cerveja_74855-2290.jpg?t=st=1722001235~exp=1722004835~hmac=349da94df1097dd07c9eabac343185c0f48c67da791ed157c1c28afcc497c78d&w=740",
        desc:"Abcdefghijklmnopqrstuvwxyz-Abcdefghijklmnopqrstuvwxyz-Abcdefghijklmnopqrstuvwxyz"
    }
  ]
  return (
    <div className='posts'>
      {posts.map(post=> (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
