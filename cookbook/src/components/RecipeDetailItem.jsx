import React from "react";
import PropTypes from "prop-types";
import RecipeDetailIngredient from "../components/RecipeDetailIngredient";
import SideDish from "./SideDish";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faClock } from "@fortawesome/free-solid-svg-icons";
import PreparationTime from "./PreparationTime";

export default class RecipeDetailItem extends React.Component {
  render() {
    const {
      title,
      preparationTime,
      directions,
      servingCount,
      ingredients,
      sideDish
    } = this.props;
    //  const { name } = ingredients;

    return (
      <div className="container-fluid">
        <h2>{title}</h2>
        <div className="row">
          <div className="col-md-4">
            <div>
              <PreparationTime preparationTime={preparationTime} />
            </div>
            <div>
              <SideDish sideDish={sideDish} />
            </div>
            <p>Pocet porcii : {servingCount}</p>
            <h3>Ingrediencie </h3>
            {ingredients &&
              ingredients.map(ingredient => {
                return (
                  <RecipeDetailIngredient
                    key={ingredient._id}
                    ingredients={ingredient}
                  />
                );
              })}
          </div>
          <div className="col-md-8">
            <h3>Postup prace: </h3>
            <p>
              {directions.split("\n").map((item, i) => {
                return <p key={i}>{item}</p>;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
RecipeDetailItem.PropTypes = {
  preparationTime: PropTypes.number.isRequired,
  directions: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired
};
