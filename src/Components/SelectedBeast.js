import React from 'react';
import { Card, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const { showModal, handleCloseModal, selectedAnimal } = this.props;

    if (!selectedAnimal || !selectedAnimal.image_url) {
      return null;
    }    

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Dialog>
          <Modal.Header>
            <button onClick={handleCloseModal}>Exit</button>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: '26rem' }}>
              <Card.Img src={selectedAnimal.image_url} />
              <Card.Body>
                <Card.Title>{selectedAnimal.title}</Card.Title>
                <Card.Text>{selectedAnimal.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeast;