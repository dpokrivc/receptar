import React from "React";
import { ControlLabel } from "react-bootstrap";

export default class AddSideDish extends React.Component {
  render() {
    const { onChange, label } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Priloha"
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}
