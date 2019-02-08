import React from "react";
import { FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

export default class RecipeEdit extends React.Component {
  render() {
    const { onChange, value, text } = this.props;
    // let Text = text;

    return (
      <div>
        <h1>Postup:</h1>
        <FormControl
          componentClass="textarea"
          rows={15}
          value={value}
          onChange={onChange}
        >
          {text}
        </FormControl>
      </div>
    );
  }
}

RecipeEdit.PropTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
