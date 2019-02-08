import React from "react";
//import { Button } from "react-bootstrap";
import RecipeDetailIngredient from "./RecipeDetailIngredient";

export default class IngredientEdit extends React.Component {
  render() {
    const { ingredients, isPressed, onChange } = this.props;
    // const { amount, amountUnit, name } = ingredients;
    //  const { name } = ingredients;
    // const {_id} = ingredients;
    return (
      <div>
        <h3>Ingrediencie: </h3>
        <div>
          {ingredients &&
            ingredients.map((ingredient, index) => {
              return (
                <RecipeDetailIngredient
                  key={index}
                  id={index}
                  ingredients={ingredient}
                  isPressed={isPressed}
                  onChange={onChange}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
