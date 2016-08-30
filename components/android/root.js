'use strict';

import React, { Component } from 'react';
import Row from './row';

import {
  ToolbarAndroid,
  AppRegistry,
  ScrollView,
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native';

export default class Root extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state.posts = [];

    fetch('http://stopgok.troinof.ru/articles/all', { method: "GET" })
      .then((res) => res.json())
      .then((resData) => {
        this.state = { posts: ds.cloneWithRows(resData) };
      })
      .catch((error) => {
        console.error('err: ', error);
      });

  }

  render() {
    return (
      <ScrollView>
        <ToolbarAndroid
          style={ styles.toolbar }>
            <View>
                <Text style={ styles.toolbarTitle }>#стопгок</Text>
            </View>
        </ToolbarAndroid>
        <ListView
            dataSource={ this.state.posts }
            renderRow={(posts) => <Row {...posts} />} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    height: 60,
    borderBottomWidth: .5,
    borderBottomColor: '#000',
    backgroundColor: '#FFCB01'
  },
  toolbarTitle: {
      fontSize: 32,
      fontFamily: 'Arial',
      fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('stopgok', () => stopgok);
