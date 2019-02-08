import React from "react";
import { ControlLabel } from "react-bootstrap";

export default class ServeEdit extends React.Component {
  render() {
    const { label, onChange, value, min, max } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            aria-describedby="btnGroupAddon"
            // style={{ width: 150 }}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            placeholder="Mnozstvo"
          />
        </div>
      </div>
    );
  }
}
