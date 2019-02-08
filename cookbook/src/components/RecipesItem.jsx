import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PreparationTime from "./PreparationTime";
import SideDish from "./SideDish";

export default class RecipesItem extends React.Component {
  render() {
    const { recipe } = this.props;
    const { title, _id, preparationTime, sideDish } = recipe;

    return (
      <div className="recipes-item">
        <Link to={`/detail/${_id}`}>
          <div className="recipes-inner">
            <p className="recipe-title">{title}</p>
            <div className="dish-time">
              <PreparationTime preparationTime={preparationTime} />
            </div>
            <div>
              <SideDish sideDish={sideDish} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

RecipesItem.propTypes = {
  recipe: PropTypes.object.isRequired
};
