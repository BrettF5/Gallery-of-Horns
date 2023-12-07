import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import HornedAnimalData from './HornedBeast';

function Gallery(props) {
  const animals = props.animals;

  // Function to group animals into sets of three
  const groupIntoSetsOfThree = (animals) => {
    const result = [];
    for (let i = 0; i < animals.length; i += 3) {
      const set = animals.slice(i, i + 3);
      result.push(set);
    }
    return result;
  };

  const setsOfThree = groupIntoSetsOfThree(animals);

  return (
    <div>
      <h1>{props.message}</h1>
      <Container>
        {setsOfThree.map((animalSet, rowIndex) => (
          <Row key={rowIndex} className='align-items-center'>
            {animalSet.map((animal, colIndex) => (
              <Col key={colIndex}>
                <HornedAnimalData
                  title={animal.title}
                  image={animal.image_url}
                  description={animal.description}
                  keyword={animal.keyword}
                  horns={animal.horns}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Gallery;
