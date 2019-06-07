import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Recipes from "./recipes";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe" exact component={Recipes} />
          <Route path="/recipe/:food" component={Recipes} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  const [food, setFood] = useState("");
  const updatefood = e => {
    setFood(e.target.value);
    console.log(food);
  };
  return (
    <div className="home">
      <h1>welcome </h1>
      <h2>let's find your ingredients</h2>
      <form action="">
        <input type="text" value={food} onChange={updatefood} />
        <button>
          <Link to={`/recipe/${food}`}>search it </Link>
        </button>
      </form>
    </div>
  );
};

export default App;
