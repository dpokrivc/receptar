import React from "react";
import { Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import RecipeDetailItem from "./RecipeDetailItem";
import RecipeSave from "./RecipeSave";
import RecipeDetailEditOption from "./RecipeDetailEditOption";
import api from "../api/api";
import { Link } from "react-router-dom";

export default class RecipeDetailOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressedTrash: ""
    };
  }

  handleDeleteRecipe = () => {
    const { isPressedTrash } = this.state;
    this.setState({ isPressedTrash: !isPressedTrash });
  };
  handleDelete = _id => {
    // api.delete(`/recipe/${_id}`).then(console.log);
    console.log(_id);
  };
  render() {
    const {
      isClicked,
      _id,
      title,
      ingredients,
      preparationTime,
      servingCount,
      directions,
      sideDish,
      onChange,
      timeChange,
      servingChange,
      pressedDel,
      amountChange,
      nameChange,
      unitChange,
      ingredientChange,
      sideDishChange,
      textChange,
      titleChange
    } = this.props;
    console.log(this.state.isPressedTrash);

    if (this.state.isPressedTrash) {
      return (
        <Alert>
          Naozaj chcete vymazat recept {title} ?
          <Link to={`/`}>
            <Button variant="primary" onClick={this.handleDelete(_id)}>
              Zmazat
            </Button>
          </Link>
        </Alert>
      );
    }
    if (isClicked === false) {
      return (
        <div>
          <div>
            <p>
              <Button variant="primary" onClick={onChange}>
                <FontAwesomeIcon icon={faEdit} />
                Upraviť
              </Button>
              <Button variant="primary" onClick={this.handleDeleteRecipe}>
                <FontAwesomeIcon icon={faTrashAlt} />
                Vymazat
              </Button>
            </p>
          </div>
          <div>
            <RecipeSave
              _id={_id}
              title={title}
              preparationTime={preparationTime}
              servingCount={servingCount}
              ingredients={ingredients}
              directions={directions}
              sideDish={sideDish}
            />
          </div>
        </div>
      );
    }
    if (isClicked === true) {
      return (
        <RecipeDetailEditOption
          onChange={onChange}
          preparationTime={preparationTime}
          servingCount={servingCount}
          directions={directions}
          ingredients={ingredients}
          timeChange={timeChange}
          servingChange={servingChange}
          pressedDel={pressedDel}
          title={title}
          isClicked={isClicked}
          amountChange={amountChange}
          unitChange={unitChange}
          nameChange={nameChange}
          ingredientChange={ingredientChange}
          textChange={textChange}
          sideDishChange={sideDishChange}
          titleChange={titleChange}
        />
      );
    }
    return (
      <div>
        <div>
          <p>
            <Button variant="primary" onClick={onChange}>
              <FontAwesomeIcon icon={faEdit} />
              Upraviť
            </Button>
            <Button variant="primary" onClick={this.handleDeleteRecipe}>
              <FontAwesomeIcon icon={faTrashAlt} />
              Vymazat
            </Button>
          </p>
        </div>
        <div className="recipes-detail-item">
          <RecipeDetailItem
            title={title}
            preparationTime={preparationTime}
            servingCount={servingCount}
            ingredients={ingredients}
            directions={directions.toString()}
            sideDish={sideDish}
          />
        </div>
      </div>
    );
  }
}
