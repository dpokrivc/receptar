import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";

export default class SideDish extends React.Component {
  render() {
    const { sideDish } = this.props;
    if (sideDish) {
      return (
        <div>
          <p>
            <FontAwesomeIcon icon={faUtensilSpoon} /> {sideDish}
          </p>
        </div>
      );
    }
    return null;
  }
}
