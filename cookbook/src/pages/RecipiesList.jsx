import React from "react";
import api from "../api/api";
import RecipesItem from "../components/RecipesItem";
//import RecipeSideDishes from "../pages/RecipeSideDishes";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { Checkbox, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import NewRecipeDetail from "../pages/NewRecipeDetail";
//import SideDish from "../components/SideDish";
export default class RecipiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      problem: null,
      searchValue: "",
      lessThan30min: "",
      isClickedButton: ""
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      data: null,
      problem: null
    });
    api.get("/recipes").then(({ data, problem }) => {
      this.setState({
        isLoading: false,
        data: data,
        problem: problem
      });
    });
  }

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  handlePreparationTime = () => {
    const { isLessThan30min } = this.state;
    this.setState({ isLessThan30min: !isLessThan30min });
  };
  handleNewRecept = () => {
    const { isClickedButton } = this.state;
    this.setState({ isClickedButton: !isClickedButton });
  };
  filterRecipes = recipe => {
    const { searchValue, isLessThan30min } = this.state;
    const { title, preparationTime } = recipe;
    const hasSubstring =
      title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    const isInTimeFrame = !isLessThan30min || preparationTime <= 30;
    return hasSubstring && isInTimeFrame;
  };

  render() {
    const {
      data,
      problem,
      isLoading,
      searchValue,
      isClickedButton
    } = this.state;
    //const {sideDish} = data;
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if (problem) {
      return <div>{problem}</div>;
    }
    if (isClickedButton) {
      return <NewRecipeDetail />;
    }
    return (
      <React.Fragment>
        <h2>Recepty</h2>
        <p>{data.length}</p>
        <Link to={`/prilohy`}>Prilohy</Link>
        <SearchBar
          label="Search for recipes"
          value={searchValue}
          onChange={this.handleChange}
        />
        <Checkbox onChange={this.handlePreparationTime}>
          Less than 30 min
        </Checkbox>
        <Link to={`/novy-recept`}>
          <Button variety="primary" onClick={this.handleNewRecept}>
            Novy recept <FontAwesomeIcon icon={faUtensils} />
          </Button>
        </Link>
        <div className="recipes-wrapper">
          {data.filter(this.filterRecipes).map(recipe => {
            return <RecipesItem key={recipe._id} recipe={recipe} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
