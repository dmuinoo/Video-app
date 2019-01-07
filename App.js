import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet'
import cards from './data';
import { Constants } from 'expo';


const cardData =     {
  title: 'AVENGERS INFINITY WAR',
  image: 'https://www.revistawelldone.cl/wp-content/uploads/2017/12/avengersinfinitywar-1494357736132_1280w.jpg',
  description: 'Avengers: Infinity War es una película estadounidense de superhéroes de 2018 basada en el equipo de superhéroes de Marvel Comics Los Vengadores, producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures.',
  url: 'https://www.youtube.com/watch?v=PhUMUr1q22c',
}

//const Items = [cardData, cardData, cardData];


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>BIENVENIDOS AL CURSO DE REACT NATIVE</Text>
        <CardSet items={cards}></CardSet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  welcome: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#000',
    textAlign: 'center',
  }
});
