import React from "react";
import { ControlLabel } from "react-bootstrap";

export default class AmountUnitAdd extends React.Component {
  render() {
    const { label, onChange } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nazov"
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}
