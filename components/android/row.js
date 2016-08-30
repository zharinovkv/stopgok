import React from 'react';
import { Dimensions, StyleSheet, TouchableHighlight, View, Image, Text} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    title: {
        padding: 10,
        paddingBottom: 0,
        color: '#222',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    thumb: {
      marginTop: 20,
      marginBottom: 20,
      height: height / 3,
      alignSelf: 'stretch',
    },
    description: {
        padding: 10,
        paddingTop: 0
    },
    row: {
      borderBottomWidth: .5,
      borderBottomColor: '#aaa',
      backgroundColor: '#fff'
    }
});

const Row = posts => (
  <View style={ styles.row }>
    <TouchableHighlight onPress={() => {
      fetch('http://resources.finance.ua/ru/public/currency-cash.json')
        .then((res) => {
          console.info(res);
        });
    }}>
      <View>
        <Text style={ styles.title }>{ posts.title }</Text>
        <Image source={{ uri: posts.thumb }} style={ styles.thumb } />
        <View></View>
      </View>
    </TouchableHighlight>
  </View>
)

export default Row;