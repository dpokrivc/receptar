import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default class PreparationTime extends React.Component {
  render() {
    const { preparationTime } = this.props;
    if (preparationTime > 59 && preparationTime % 60 === 0) {
      return (
        <p>
          <FontAwesomeIcon icon={faClock} />
          {preparationTime / 60} h
        </p>
      );
    }
    if (preparationTime > 59 && preparationTime % 60 !== 0) {
      var preparationMinute = preparationTime % 60;
      var preparationHours = (preparationTime - preparationMinute) / 60;
      return (
        <p>
          <FontAwesomeIcon icon={faClock} />
          {preparationHours} h {preparationMinute} min
        </p>
      );
    }
    return (
      <p>
        <FontAwesomeIcon icon={faClock} /> {preparationTime}min
      </p>
    );
  }
}
