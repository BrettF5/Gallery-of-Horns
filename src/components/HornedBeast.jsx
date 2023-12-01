import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';

function HornedAnimalData(props) {
  const [favoriteCount, setFavoriteCount] = useState(0);

  function handleClick() {
    setFavoriteCount(favoriteCount + 1);
  }

  return (
    <div onClick={handleClick}>
      <h2>{props.title}</h2>
      <Image src={props.image} alt={props.title} rounded fluid />
      <p>{props.description}</p>
      <h3>Favorite Count: {favoriteCount}</h3>
    </div>
  );
}

export default HornedAnimalData;
