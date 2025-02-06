/* reactnative.dev/docs/flatlist */
import { StyleSheet } from "react-native";
import React, { Component } from "react";

import HomeListItems from "./app/components/HomeListItems";

export default class App extends Component {
  render() {
    return <HomeListItems />;
  }
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
