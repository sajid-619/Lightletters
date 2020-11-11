import React, { Component } from "react";
import { Animated, View, FlatList } from "react-native";

import Inbox from "./Inbox";

export default class MailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [1, 2, 3, 4, 5, 6, 7, 8],
      height: new Animated.Value(0)
    };

    this._renderRow = this._renderRow.bind(this);
    this.showUndo = this.showUndo.bind(this);
  }

  showUndo() {
    this.props.showUndo();
  }

  _renderRow(row) {
    return <Inbox key={row} showUndo={this.showUndo} />;
  }

  render() {
    return (
      <FlatList data={this.state.dataSource} renderItem={this._renderRow} />
    );
  }
}