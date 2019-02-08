import React from "react";
//import TitleEdit from "../components/TitleEdit";
//import { Button } from "react-bootstrap";
import NewRecipeSave from "../components/NewRecipeSave";
//import RecipeSave from "./RecipeSave";
import RecipeDetailEditOption from "../components/RecipeDetailEditOption";

export default class NewRecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "Novy recept",
      directions: "",
      preparationTime: "",
      ingredients: [],
      servingCount: "",
      sideDish: "",
      isClicked: true,
      isPressedDelete: false,
      amount: "",
      amountUnit: "",
      name: ""
    };
  }
  handleNewTitle = e => {
    if (e.target.value.length > 0) {
      this.setState({ newTitle: e.target.value });
    } else {
      this.setState({ newTitle: "" });
    }
  };
  handleisClicked = () => {
    const { isClicked, newTitle } = this.state;
    if (newTitle.length > 0) {
      this.setState({ isClicked: !isClicked });
    }
  };

  handleIsPressedDel = id => {
    const { isPressedDelete, ingredients } = this.state;

    this.setState({
      isPressedDelete: !isPressedDelete
    });

    ingredients.splice(id, 1);
  };
  handleNewIngredient = () => {
    const { amount, amountUnit, name } = this.state;
    let newOne = {
      name: name,
      amountUnit: amountUnit,
      amount: amount
    };
    if (name.length > 0) {
      this.setState({
        ingredients: [...this.state.ingredients, newOne]
      });
    }
  };
  handleChangeTextArea = e => {
    this.setState({ directions: e.target.value });
  };
  handleChangeServeCount = e => {
    this.setState({ servingCount: e.target.value });
  };
  handleChangePreparationTime = e => {
    this.setState({ preparationTime: e.target.value });
  };
  handleAddAmount = e => {
    this.setState({ amount: e.target.value });
  };
  handleAddUnit = e => {
    this.setState({ amountUnit: e.target.value });
  };
  handleAddName = e => {
    if (e.target.value.length > 0) {
      this.setState({ name: e.target.value });
    } else {
      this.setState({ name: "" });
    }
  };
  handleNewSideDish = e => {
    this.setState({ sideDish: e.target.value });
    //console.log("side: ", this.state.sideDish);
  };
  render() {
    const {
      newTitle,
      directions,
      preparationTime,
      ingredients,
      sideDish,
      servingCount,
      isClicked
    } = this.state;
    if (!isClicked) {
      return (
        <NewRecipeSave
          title={newTitle}
          directions={directions}
          preparationTime={preparationTime}
          ingredients={ingredients}
          sideDish={sideDish}
          servingCount={servingCount}
        />
      );
    }
    //console.log(isClicked);
    //<h2>{newTitle}</h2>
    //<TitleEdit label="Pridajte nadpis" onChange={this.handleNewTitle} />
    return (
      <div>
        <RecipeDetailEditOption
          onChange={this.handleisClicked}
          preparationTime={preparationTime}
          servingCount={servingCount}
          directions={directions}
          ingredients={ingredients}
          timeChange={this.handleChangePreparationTime}
          servingChange={this.handleChangeServeCount}
          pressedDel={this.handleIsPressedDel}
          title={newTitle}
          isClicked={isClicked}
          amountChange={this.handleAddAmount}
          unitChange={this.handleAddUnit}
          nameChange={this.handleAddName}
          ingredientChange={this.handleNewIngredient}
          textChange={this.handleChangeTextArea}
          sideDishChange={this.handleNewSideDish}
          titleChange={this.handleNewTitle}
        />
      </div>
    );
  }
}
