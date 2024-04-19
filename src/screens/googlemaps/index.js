import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default function GoogleMapsScreen() {

  return (
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 31.6341600,
         longitude: -7.9999400,
         latitudeDelta: 0.1,
         longitudeDelta: 0.1,
       }}
     >
     
     </MapView>
   </View>
  );
}
