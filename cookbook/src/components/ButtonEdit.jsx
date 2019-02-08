import React from "react";
import PropTypes from "prop-types";
import { ButtonToolbar, Button } from "react-bootstrap";

export default class ButtonEdit extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <ButtonToolbar>
        <Button variant="outline-secondary" label={label}>
          Edit
        </Button>
      </ButtonToolbar>
    );
  }
}

ButtonEdit.PropTypes = {
  label: PropTypes.string.isRequired
  //onChange: PropTypes.func.isRequired
};
