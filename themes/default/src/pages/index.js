import React, { Component } from "react";
// import Box from "../components/box";
// import {}
import { Box } from "default";
import Layout from "../components/layout";
import { DefaultThemeStyle } from "default";
export default class Index extends Component {
  render() {
    return (
      <Layout className={DefaultThemeStyle.defaultThemeCheck}>
        <div>
          <h1>This is the theme default</h1>
          <Box>This content should be in box...</Box>
        </div>
      </Layout>
    );
  }
}
