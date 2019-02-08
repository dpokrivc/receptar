import React from "react";
import api from "../api/api";
import SideDish from "../components/SideDish";
//import { Link } from "react-router-dom";

export default class RecipeSideDishes extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      problem: null,
      sideDishes: []
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
  fillArr = sD => {};

  render() {
    const { data, problem, isLoading, sideDishes } = this.state;
    //const {sideDish} = data;
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if (problem) {
      return <div>{problem}</div>;
    }

    return (
      <div>
        <h2>Prilohy</h2>
        <div>
          {data.map(recipe => {
            return <SideDish key={recipe._id} sideDish={recipe.sideDish} />;
          })}
        </div>
      </div>
    );
  } */
  render() {
    return (
      <div className="table-responsive-sm">
        <h2>Prilohy</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nazov</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Zemiaky</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cestoviny</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Spenat</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Ryza</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Cocka</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Kuskus</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Polenta</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
