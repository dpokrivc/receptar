import React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";

export default class TimeEdit extends React.Component {
  render() {
    const { label, onChange, value } = this.props;
    return (
      <div>
        <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <div className="input-group">
            <span className="input-group-addon" id="btnGroupAddon">
              min
            </span>
            <input
              type="number"
              className="form-control"
              aria-describedby="btnGroupAddon"
              style={{ width: 100 }}
              value={value}
              min={1}
              max={200}
              onChange={onChange}
            />
          </div>
        </FormGroup>
      </div>
    );
  }
}
