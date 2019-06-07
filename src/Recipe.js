import React from "react";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className="recipe">
      <h4>{title}</h4>
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
