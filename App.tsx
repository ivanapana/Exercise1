import React from 'react'
import {Text, StyleSheet} from 'react-native'
//Komponen adalah fungsi yang mengembaikan J5X
const App = () => {
  return (
    //JSX
    <Text style={styles.title}>Basic React Native</Text>
  )
}

export default App;

const styles = StyleSheet.create({
    title: {
      backgroundColor: '#FFC0CB',
      color: 'black',
      fontSize: 35,
      textAlign: 'center',
      margin: 20, 
      fontWeight: '600',
    },
});