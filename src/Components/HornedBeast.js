import React from 'react';
import './HornedBeast.css'
import { Card, Button } from 'react-bootstrap';

// ** Create state inside of this component that keeps track of the number of times each beast is favorited. Put a heart in each component with the number of favorite next to it

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: 0,
    }
  }


  handleFavorite = () => {
    this.setState(prevState => ({
      favorites: prevState.favorites + 1
    }));
    this.props.handleOpenModal(this.props.title);
  }


  render() {
    return (
      <>
        <Card onClick = {() => this.props.handleOpenModal(this.props.title)}>
          <h2>{this.props.title}</h2>
          <img src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.favorited} />
          <Button variant="primary" onClick={this.handleFavorite} > Favorite</Button>          
          <p> 💛 {this.state.favorites} Favorited</p>
          {/* <p> {this.props.description}</p> */}
          {/* <div>{this.state.notFavorite ? 'Not Favorite' : ''}</div> */}
        </Card>
      </>
    )
  }
};


export default HornedBeast;