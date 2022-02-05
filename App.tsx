/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import images from './images/index'
import fonts from './fonts/index'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>tap to train your brain</Text>
      </View>
      <View style={styles.brainImageContainer}>
        <Image source={images.bigBrain} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  instructionsText: {
    fontFamily: 'Roboto',
    marginTop: 'auto',
    fontSize: 30,
    paddingBottom: 50
  },
  instructionsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#99CEDA',
  },
  brainImageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
