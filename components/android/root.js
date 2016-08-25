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

    this.state = {
        news: ds.cloneWithRows([{
            title: 'Боевой повар Сома',
            thumb: 'https://pp.vk.me/c623321/v623321919/2557c/Ya2lOAITmFs.jpg',
            description: 'Юкихира Сома мечтает стать штатным шеф-поваром в ресторане отца и превзойти своего родителя на профессиональном поприще. Он упорно идет навстречу мечте, но в тот момент, когда средняя школа остается позади, отец, Юкихира Дзёитиро, закрывает свое заведение и отправляется на покорение Европы.'
        }, {
            title: 'Стоп гок новость 2',
            thumb: 'http://www.miandra-medical.ro/www/wp-content/uploads/2015/11/dummy-articol.jpg',
            description: 'И снова новости про стоп гок'
        }, {
            title: 'Не боевой повар сома',
            thumb: 'https://pp.vk.me/c623321/v623321919/2557c/Ya2lOAITmFs.jpg',
            description: 'Близится последняя битва между самыми талантливыми первогодками кулинарной академии Тооцуки. Кто же станет победителем 43-го кулинарного турнира Осенних выборов? Мастер индийских специй Акира, воплощение яростно и безумной кулинарии Курокиба или доморощенный гений Юкихира. Кто из них достоин претендовать на место в элитной 10-ке лучших поваров академии?'
        }])
    };
  }

  render() {
    return (
      <ScrollView>
        <ToolbarAndroid
          logo={}
          style={ styles.toolbar }>
            <View>
                <Text style={ styles.toolbarTitle }>#стопгок</Text>
            </View>
        </ToolbarAndroid>
        <ListView
            dataSource={ this.state.news }
            renderRow={(news) => <Row {...news} />} />
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
