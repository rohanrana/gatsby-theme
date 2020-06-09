import React, { Component } from "react";
import "default/src/assets/css/style.scss";
import "core/src/assets/css/style.scss";
export default class Index extends Component {
  render() {
    return (
      <section className="defaultThemeCheck">
        <h1>Backgorund CSS is from default theme </h1>
        <span className="coreThemeCheck">
          This style is applied from core theme in Root.
        </span>
      </section>
    );
  }
}
