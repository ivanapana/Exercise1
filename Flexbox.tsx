import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redContainer} />
        <View style={styles.greenContainer} />
        <View style={styles.blueContainer} />
      </View>
      <View style={styles.container2}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    backgroundColor: 'yellow',
  },

  redContainer: {
    flex: 1,
    backgroundColor: '#880c0cff',
  },

  greenContainer: {
    flex: 4,
    backgroundColor: '#65b65fff',
  },

  blueContainer: {
    flex: 1,
    backgroundColor: '#1a348bff',
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around', // main axis
    alignItems: 'flex-end', // cross axis
    backgroundColor: 'pink',
  },

  redBox: {
    height: 50,
    width: 50,
    backgroundColor: '#880c0cff',
  },

  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: '#65b65fff',
  },

  blueBox: {
    height: 50,
    width: 50,
    backgroundColor: '#1a348bff',
  },
});
