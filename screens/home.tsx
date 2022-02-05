import React from 'react';
 import {
   Alert,
   Image,
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
 } from 'react-native';
 
 import images from '../images/index'
 
 const HomeScreen = ({ navigation }) => {
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.instructionsContainer}>
         <Text style={styles.instructionsText}>tap to train your brain</Text>
       </View>
       <View style={styles.brainImageContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('lmao')}>
           <Image source={images.bigBrain} />
         </TouchableOpacity>
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
     alignItems: 'center',
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
 
 export default HomeScreen;
 