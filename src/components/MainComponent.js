import React, { Component } from "react";
import Menu from "./Menucomponent";
import { DISHES } from "../Shared/dishes";
import Header from "../components/header-component";
import Footer from "../components/footer-component";
import Home from "../components/HomeComponent";
import DishDetail from "../components/DishDetailcomponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "../components/ContactComponent";
import { COMMENTS } from "../Shared/comments";
import { LEADERS } from "../Shared/Leaders";
import { PROMOTIONS } from "../Shared/Promotion";
import About from "../components/AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promo={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishwithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
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
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
