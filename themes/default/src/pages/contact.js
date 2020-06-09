import React, { Component } from "react";
import "core/src/assets/css/style.scss";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>This stuff is from contact us from default theme</h1>
        <h1 className="coreThemeCheck">
          This style is applied from core theme in Default theme,.
        </h1>
      </div>
    );
  }
}
