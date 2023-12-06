import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import SelectedBeast from './SelectedBeast';
// import { FaHeart } from 'react-icons/fa';

function HornedAnimalData(props) {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [showModal, setShowModal] = useState(false);


  function handleClick() {
    setFavoriteCount(favoriteCount + 1);
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section>
    <div onClick={() => {
      handleClick();
      openModal();
    }}>
        <h2>{props.title}</h2>
        <Image src={props.image} alt={props.title} rounded fluid />
        <p>{props.description}</p>
        <h3>Favorite Count: {favoriteCount}</h3>
      </div>
      {showModal && (
        <SelectedBeast
          show={showModal}
          title={props.title}
          image={props.image}
          description={props.description}
          onClose={closeModal}
      />
      )}
      </section>
      
  );
}

export default HornedAnimalData;
