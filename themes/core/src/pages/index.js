import React, { Component } from "react";
import Box from "../components/box";
import Layout from "../components/layout";
import '../assets/css/style.css';
export default class Index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>This is the theme</h1>
          <Box>This content should be in box...</Box>
        </div>
      </Layout>
    );
  }
}
