import React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import data from './data/data.json';
import SelectedBeast from './Components/SelectedBeast';
import {Container, Form } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      animalData: data,
      selectedAnimal: {}
    }
  }
  

  handleOpenModal = (name) => {
    let selectedAnimal = data.find(animal => animal.title === name);

    this.setState ({
      showModal: true,
      selectedAnimal
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }


handleSelect = (event) => {
  let selected = event.target.value;

  if (selected === '1' || selected === '2' || selected === '3' || selected === '100') {
    let newData =data.filter(animal => animal.horns === parseInt(selected));
    this.setState({
      animalData: newData
    });
  } else if (selected === 'all') {
    this.setState({
      animalData: data
    });
  } else {
    this.setState({
      animalData: []
    });  
  }
}




  render() {
    return(
      <>
        <Header />

        <Container className = "container">
        <Form className = "form">
          <Form.Group>
            <h2 class = "title-form"> Filter Beasts By Horn</h2>
            <Form.Select className = "form-select" onChange = {this.handleSelect}>
              <option value = 'all'>Click For Options</option>
              <option value = '1'>1 Horn</option>
              <option value = '2'>2 Horns</option>
              <option value = '3'>3 Horns</option>
              <option value = '100'>100 Horns</option>
              <option value = 'all'>See All Beasts</option>
            </Form.Select>
          </Form.Group>
        </Form>
        </Container>

        <Main 
        animals ={this.state.animalData}
        handleOpenModal = {this.handleOpenModal}/>
        <SelectedBeast
          showModal = {this.state.showModal}
          handleCloseModal = {this.handleCloseModal}
          selectedAnimal = {this.state.selectedAnimal}
        />
        <Footer />
      </>
    )
  }
}

export default App;