import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import Menu from './components/Menucomponent';
import { DISHES } from './Shared/dishes';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render(){
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Ristornte Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
    </div>
    );
  }
}

export default App;
