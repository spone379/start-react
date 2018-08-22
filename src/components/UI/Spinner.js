import React, { Component } from 'react';
import spinner from '../../img/spinner.gif';


class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          style={{ width: "200px", display: "block", margin: "auto" }}
          alt="Loading..." />
      </div>
    );
  }
}
export default Spinner;