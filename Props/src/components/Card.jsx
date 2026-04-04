import React from 'react'

const Card = (user) => {
  return (
    <div className="card">
        <img src={user.image} alt='profile image'></img>
        <h1>{user.name}, {user.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi dolorem sint ullam quasi maiores, explicabo earum, eos maxime repellendus pariatur quis vel est voluptates voluptatem sit nesciunt? Perspiciatis, officiis!</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card