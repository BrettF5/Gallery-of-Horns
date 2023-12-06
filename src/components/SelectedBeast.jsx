import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function SelectedBeast(props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.image}
            alt={props.title}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
            



export default SelectedBeast;