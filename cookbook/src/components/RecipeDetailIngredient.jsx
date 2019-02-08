import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//import api from "../api/api";

export default class RecipeDetailIngredient extends React.Component {
  render() {
    const { ingredients, id } = this.props;
    const { isPressed, onChange } = this.props;
    const { name, amount, amountUnit } = ingredients;

    if (isPressed) {
      return (
        <div>
          <Button variant="secondary" onClick={() => onChange(id)} value={name}>
            <FontAwesomeIcon icon={faTrash} color="#C21807" />
          </Button>
          {amount} {amountUnit} {name}
        </div>
      );
    }
    return (
      <div>
        <div className="ingredients">
          {amount} {amountUnit} {name}
        </div>
      </div>
    );
  }
}

RecipeDetailIngredient.PropTypes = {
  ingredients: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  amountUnit: PropTypes.string.isRequired
};
