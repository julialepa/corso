import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import First from './tabs/first'
import Second from './tabs/second'
import Third from './tabs/third'

export default class Tabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
    ],
  };

  render() {
    return (
      <TabView
      navigationState={this.state}
      renderScene={SceneMap({
        first: First,
        second: Second,
        third: Third
      })}
      onIndexChange={index => this.setState({ index })}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});