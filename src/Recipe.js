import React from "react";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={img} alt="" />
      <div className="ingredients">
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
