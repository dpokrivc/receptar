import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ServeEdit from "../components/ServeEdit";
import TimeEdit from "../components/TimeEdit";
import IngredientEdit from "../components/IngredientEdit";
import AmountAdd from "../components/AmountAdd";
import AmountUnitAdd from "../components/AmountUnitAdd";
import RecipeEdit from "../components/RecipeEdit";
import TitleEdit from "./TitleEdit";
import { Link } from "react-router-dom";
//import AddSideDish from "./AddSideDish";
//import SideDish from "./SideDish";

export default class RecipeDetailEditOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCancelPressed: false
    };
  }
  handleIsCancelPressed = () => {
    this.setState({ isCancelPressed: !this.state.isCancelPressed });
  };
  render() {
    const {
      onChange,
      preparationTime,
      servingCount,
      ingredients,
      directions,
      timeChange,
      title,
      isClicked,
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
    return (
      <div>
        <p>
          <Button variant="primary" onClick={onChange}>
            <FontAwesomeIcon icon={faSave} /> Ulozit
          </Button>
          <Link to={`/`}>
            <Button variant="primary" onClick={this.handleIsCancelPressed}>
              Zrusit
            </Button>
          </Link>
        </p>
        <div className="container-fluid">
          {" "}
          <div className="row">
            <h2>{title}</h2>
            <TitleEdit label="Pridajte nazov" onChange={titleChange} />
            <div className="col-md-2">
              <TimeEdit
                label="Doba pripravy"
                onChange={timeChange}
                value={preparationTime}
              />
              <ServeEdit
                label="Pocet porcii"
                onChange={servingChange}
                value={servingCount}
                min={1}
                max={20}
              />
              <AmountAdd label="Pridaj prilohu" onChange={sideDishChange} />
            </div>
            <div className="col-md-5">
              <IngredientEdit
                ingredients={ingredients}
                isPressed={isClicked}
                onChange={pressedDel}
              />
              <ServeEdit
                label="Pridat ingredienciu"
                min={0}
                max={1000}
                onChange={amountChange}
              />
              <AmountUnitAdd
                label="Pridajte jednotku"
                placeholder="Jednotka"
                onChange={unitChange}
              />
              <AmountAdd
                label="Pridajte nazov"
                placeholder="Nazov"
                onChange={nameChange}
              />
              <Button variant="primary" onClick={ingredientChange}>
                <FontAwesomeIcon icon={faPlusCircle} />
                Pridaj
              </Button>
            </div>
            <div className="col-md-5">
              <RecipeEdit
                onChange={textChange}
                text={directions}
                title={title}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
