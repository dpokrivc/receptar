import React from "react";
import api from "../api/api";
import RecipeDetailItem from "./RecipeDetailItem";

export default class NewRecipeSave extends React.Component {
  componentDidMount() {
    const {
      directions,
      title,
      servingCount,
      ingredients,
      preparationTime,
      sideDish
    } = this.props;
    //const {amount} = ingredients;

    api
      .post(`/recipes/`, {
        title: title,
        directions: directions,
        ingredients: ingredients,
        preparationTime: preparationTime,
        servingCount: servingCount,
        sideDish: sideDish
      })
      .then(console.log);
  }
  render() {
    const {
      title,
      preparationTime,
      servingCount,
      ingredients,
      directions,
      sideDish
    } = this.props;
    return (
      <div>
        <RecipeDetailItem
          title={title}
          preparationTime={preparationTime}
          servingCount={servingCount}
          ingredients={ingredients}
          directions={directions}
          sideDish={sideDish}
        />
      </div>
    );
  }
}
