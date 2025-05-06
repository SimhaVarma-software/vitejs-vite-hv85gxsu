import React from 'react'

const Card = ({name,location,image,price,description}) => {
  return (
    <div>
      <img style={{width:250,height:250}} src={image} alt="" />
        <h2>{name}</h2>
        <h3>{location}</h3>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export default Card
