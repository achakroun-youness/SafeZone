import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import markerIcon from './markerIcon.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const LATITUDE = 31.63416;
const LONGITUDE = -7.99994;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = 0.1;

// const Coordonnees = require('backend\models\Coordonnees.js'); 

let id = 0;

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const GoogleMapsScreen = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [markers, setMarkers] = useState([]);

  const onMapPress = (e) => {
    const newMarker = {
      coordinate: e.nativeEvent.coordinate,
      key: id++, 
      color: randomColor(),
    };
    setMarkers([...markers, newMarker]);
  };

  const saveAddress = async () => {
    try {
        // Assuming markers is an array of coordinate objects
        const response = await fetch('/coordinates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(markers)
        });

        if (!response.ok) {
            throw new Error('Failed to save coordinates');
        }

        console.log('Coordinates saved successfully');
    } catch (error) {
        console.error('Error saving coordinates:', error.message);
    }
};

  
  

//   const saveAddress = () => {
//     let index=0;
//   if (markers.length > 0) {
//     markers.forEach((marker) => {
//       order=index++;
//       console.log("Latitude:", marker.coordinate.latitude);
//       console.log("Longitude:", marker.coordinate.longitude);
//       console.log("Order:", order);

//       // Do something with the latitude here, like saving it to state or sending it to a server
//     });
//   } else {
//     console.log("No markers to save.");
//   }
// };
// const saveAddress = () => {
//   if (markers.length > 0) {
//     markers.forEach((marker, index) => {
//       const { latitude, longitude } = marker.coordinate;
//       const order = index + 1; // Add 1 to index to start order from 1
//       const newCoord = new Coordonnees({ latitude, longitude, order });
//       newCoord.save()
//         .then(savedCoord => {
//           console.log("Saved coordinate:", savedCoord);
//           // Do something with the saved coordinate
//         })
//         .catch(error => {
//           console.error("Error saving coordinate:", error);
//           // Handle error
//         });
//     });
//   } else {
//     console.log("No markers to save.");
//   }
// };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        onPress={(e) => onMapPress(e)} >
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            image={markerIcon}
            style={styles.markerIcon}
          >
          </Marker>
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button 
          title="Save" 
          onPress={saveAddress} 
          style={styles.button}
        />
      </View>
    </View>
  ); 
};

const styles = {
  buttonContainer: {
    marginBottom: 25,
  },
  button: {
    fontSize: 20, 
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
};

export default GoogleMapsScreen;
