import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Team Voting App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#29gh45'
  },
  text:{
    padding: 21,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

