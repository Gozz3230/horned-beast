import React from 'react';
import HornedBeast from './HornedBeast';
// import data from '../data/data.json';
import Card from 'react-bootstrap/Card';
// import './Main.css';

// import data from '../data/data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Card>
          {this.props.animals.map(beastObj => (
            <HornedBeast 
              key = {beastObj.title}
              image_url = {beastObj.image_url}
              // alt = {beastObj.description}
              title = {beastObj.title}
              description = {beastObj.description}
              // keyword = {beastObj.keyword}
              // horns = {beastObj.horns}
              handleOpenModal = {this.props.handleOpenModal}
            />
          ))}
        </Card>
      </main>
    );
  }
}

export default Main;