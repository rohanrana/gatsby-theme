import React, { Component } from "react";
import { Box } from "default";
import Layout from "../components/layout";

export default class Index extends Component {
  render() {
    return (
      <Layout >
        <div>
          <h1>This is the theme default</h1>
          <Box>This content should be in box..</Box>
        </div>

      </Layout>
    );
  }
}
