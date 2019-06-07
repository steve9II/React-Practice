import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function Recipes({ match }) {
  const APP_ID = "dc4ea3df";
  const APP_keys = "fcb66ab813beb73ebbd2b4d6d1fb1228";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQurey] = useState(match.params.food);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getRecipes();
    console.log(match);
  }, [query]);
  useEffect(() => {
    getRecipes();
    console.log(match);
  }, [page]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_keys}&from=${page}&to=${page +
        4}`
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
  const changePageUp = () => {
    setPage(page + 4);
  };
  const changePageDown = () => {
    setPage(page - 4);
  };
  return (
    <div className="recipes">
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
      <div className="page">
        <button className="pagedown" onClick={changePageDown}>
          PageDown
        </button>
        <button className="pageup" onClick={changePageUp}>
          pageup
        </button>
      </div>
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

export default Recipes;
