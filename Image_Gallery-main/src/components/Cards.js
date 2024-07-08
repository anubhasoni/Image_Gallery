import React from 'react'

const Cards = ({item}) => {
  return (
    <div className='card'>
        <div className='img'>
            <img src={item.userImageURL} alt="image" />
        </div>
       <div className='content'>
       <h3>{item.user}</h3>
        <p>Views: {item.views}</p>
        <p>Downloads: {item.downloads}</p>
        <p>Likes: {item.likes}</p>
       </div>

    </div>
  )
}

export default Cards
