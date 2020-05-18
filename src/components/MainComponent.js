import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import Menu from './Menucomponent';
import DishDetail from './DishDetailcomponent';
import { DISHES } from '../Shared/dishes';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null 
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
}

  render(){
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Ristornte Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail 
      dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
    </div>
    );
  }
}

export default Main;
