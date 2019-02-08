import React from "react";
import api from "../api/api";
//import RecipeDetailItem from "../components/RecipeDetailItem";
//import ButtonEdit from "../components/ButtonEdit";
//import ButtonEdit from "../components/ButtonEdit";
/* import { Button } from "react-bootstrap";
import RecipeEdit from "../components/RecipeEdit";
import RecipeSave from "../components/RecipeSave";
import ServeEdit from "../components/ServeEdit";
import IngredientEdit from "../components/IngredientEdit";
import TimeEdit from "../components/TimeEdit";
import AmountAdd from "../components/AmountAdd";
import AmountUnitAdd from "../components/AmountUnitAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons"; */
import RecipeDetailOption from "../components/RecipeDetailOption";

export default class RecipesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null,
      problem: null,
      isClicked: "",
      isPressedDelete: false,
      newDirections: "",
      newServeCount: "",
      newPreparationTime: "",
      newAmountUnit: "",
      newAmount: "",
      newName: "",
      isName: "",
      newSideDish: "",
      newTitle: "",
      newIngredients: []
    };
    this.handleIsClicked = this.handleIsClicked.bind(this);
    this.handleIsPressedDel = this.handleIsPressedDel.bind(this);
  }
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({
      isLoading: true
    });

    api.get(`/recipes/${id}`).then(({ data, problem }) => {
      //console.log("HEEEEEUOOOO");

      this.setState({
        isLoading: false,
        data,
        problem,
        newDirections: data.directions,
        newPreparationTime: data.preparationTime,
        newServeCount: data.servingCount,
        newIngredients: data.ingredients,
        newSideDish: data.sideDish,
        newTitle: data.title
        // ingredients: data.ingredients
      });
    });
  }
  handleNewIngredient = () => {
    const { newAmount, newAmountUnit, newName } = this.state;
    let newOne = {
      name: newName,
      amountUnit: newAmountUnit,
      amount: newAmount
    };
    if (newName.length > 0) {
      this.setState({
        newIngredients: [...this.state.newIngredients, newOne]
      });
    }
  };

  handleIsClicked() {
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked
    });
  }
  handleIsPressedDel = id => {
    const { isPressedDelete, newIngredients } = this.state;

    this.setState({
      isPressedDelete: !isPressedDelete
    });

    newIngredients.splice(id, 1);
  };
  handleChangeTextArea = e => {
    this.setState({ newDirections: e.target.value });
  };
  handleChangeServeCount = e => {
    this.setState({ newServeCount: e.target.value });
  };
  handleChangePreparationTime = e => {
    this.setState({ newPreparationTime: e.target.value });
  };
  handleAddAmount = e => {
    this.setState({ newAmount: e.target.value });
  };
  handleAddUnit = e => {
    this.setState({ newAmountUnit: e.target.value });
  };
  handleAddName = e => {
    if (e.target.value.length > 0) {
      this.setState({ newName: e.target.value });
    } else {
      this.setState({ newName: "" });
    }
  };
  handleNewSideDish = e => {
    this.setState({ newSideDish: e.target.value });
    console.log("side: ", this.state.newSideDish);
  };
  handleNewTitle = e => {
    if (e.target.value.length > 0) {
      this.setState({ newTitle: e.target.value });
    } else {
      this.setState({ newTitle: "" });
    }
    console.log(this.state.newTitle);
  };
  render() {
    const {
      isLoading,
      data,
      problem,
      newDirections,
      newServeCount,
      newPreparationTime,
      newIngredients,
      newSideDish,
      newTitle,
      isClicked
    } = this.state;
    if (isLoading) {
      return "Loading ...";
    }
    if (problem) {
      return problem;
    }
    if (!data) {
      return null;
    }

    const {
      // title,
      // preparationTime,
      //directions,
      //sideDish,
      //servingCount,
      //ingredients,
      _id
    } = data;
    console.log(data);
    return (
      <RecipeDetailOption
        _id={_id}
        title={newTitle}
        preparationTime={newPreparationTime}
        servingCount={newServeCount}
        ingredients={newIngredients}
        directions={newDirections}
        sideDish={newSideDish}
        onChange={this.handleIsClicked}
        pressedDel={this.handleIsPressedDel}
        timeChange={this.handleChangePreparationTime}
        servingChange={this.handleChangeServeCount}
        isClicked={isClicked}
        amountChange={this.handleAddAmount}
        unitChange={this.handleAddUnit}
        nameChange={this.handleAddName}
        ingredientChange={this.handleNewIngredient}
        textChange={this.handleChangeTextArea}
        sideDishChange={this.handleNewSideDish}
        titleChange={this.handleNewTitle}
      />
    );
  }
}
//const { isClicked } = this.state;
/* if (isClicked) {
      return (
        <div>
          <Button variant="primary" onClick={this.handleIsClicked}>
            <FontAwesomeIcon icon={faSave} /> Ulozit
          </Button>
          <div className="container-fluid">
            {" "}
            <div className="row">
              <div className="col-md-2">
                <TimeEdit
                  label="Doba pripravy"
                  onChange={this.handleChangePreparationTime}
                  value={newPreparationTime}
                />
                <ServeEdit
                  label="Pocet porcii"
                  onChange={this.handleChangeServeCount}
                  value={newServeCount}
                  min={1}
                  max={20}
                />
              </div>
              <div className="col-md-5">
                <IngredientEdit
                  ingredients={newIngredients}
                  isPressed={isClicked}
                  onChange={this.handleIsPressedDel}
                />
                <ServeEdit
                  label="Pridat ingredienciu"
                  min={0}
                  max={1000}
                  onChange={this.handleAddAmount}
                />
                <AmountUnitAdd
                  label="Pridajte jednotku"
                  placeholder="Jednotka"
                  onChange={this.handleAddUnit}
                />
                <AmountAdd
                  label="Pridajte nazov"
                  placeholder="Nazov"
                  onChange={this.handleAddName}
                />
                <Button variant="primary" onClick={this.handleNewIngredient}>
                  <FontAwesomeIcon icon={faPlusCircle} />
                  Pridaj
                </Button>
              </div>
              <div className="col-md-5">
                <RecipeEdit
                  onChange={this.handleChangeTextArea}
                  text={newDirections}
                  title={title}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (isClicked === false) {
      return (
        <div>
          <div>
            <Button variant="primary" onClick={this.handleIsClicked}>
              <FontAwesomeIcon icon={faEdit} />
              Upraviť
            </Button>
          </div>

          <div>
            <RecipeSave
              _id={_id}
              title={title}
              preparationTime={newPreparationTime}
              servingCount={newServeCount}
              ingredients={newIngredients}
              directions={newDirections}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Button variant="primary" onClick={this.handleIsClicked}>
            <FontAwesomeIcon icon={faEdit} />
            Upraviť
          </Button>
        </div>
        <div className="recipes-detail-item">
          <RecipeDetailItem
            title={title}
            preparationTime={newPreparationTime}
            servingCount={newServeCount}
            ingredients={newIngredients}
            directions={newDirections.toString()}
            sideDish={sideDish}
          />
        </div>
        <div />
      </div>
    );
  }
}
 */
