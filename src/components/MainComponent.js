import React, { Component } from "react";
import Menu from "./Menucomponent";
import { DISHES } from "../Shared/dishes";
import Header from "../components/header-component";
import Footer from "../components/footer-component";
import Home from "../components/HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
