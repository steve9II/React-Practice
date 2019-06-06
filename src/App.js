import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "dc4ea3df";
  const APP_keys = "fcb66ab813beb73ebbd2b4d6d1fb1228";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQurey] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_keys}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = e => {
    e.preventDefault();
    setQurey(search);
  };
  return (
    <div className="app">
      <form action="" className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="content">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
