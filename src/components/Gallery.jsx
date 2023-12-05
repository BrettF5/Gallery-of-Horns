import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import HornedAnimalData from './HornedBeast';


function Gallery(props) {
  return (
    <div>
      <h1>{props.message}</h1>
      <Container>
        <Row className='align-items-center'>
          {props.hornAnimals.map((animal, index) => (
            <Col key={animal._id}>
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
      </Container>
    </div>
  );
}

export default Gallery;
