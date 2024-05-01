import React, { useState } from 'react';
import { View, Button } from 'react-native';
import markerIcon from './markerIcon.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const fetch = require('node-fetch'); // Import fetch if not already imported

const LATITUDE = 31.63416;
const LONGITUDE = -7.99994;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = 0.1;

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

// const saveAddress = async () => {
//     try {
//         // Assuming markers is an array of coordinate objects
//         const response = await fetch('http://localhost:3000/api/coordinates', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(markers)
//         });

//         if (!response.ok) {
//             throw new Error('Failed to save coordinates');
//         }

//         console.log('Coordinates saved successfully');
//     } catch (error) {
//       console.error('Error saving coordinates:', error);

//     }
// };

  

// const saveAddress = () => {
//     let index=0;
//     if (markers.length > 0) {
//       markers.forEach((marker) => {
//         order=index++;
//         console.log("Latitude:", marker.coordinate.latitude);
//         console.log("Longitude:", marker.coordinate.longitude);
//         console.log("Order:", order);

//       // Do something with the latitude here, like saving it to state or sending it to a server
//    });
//   } else {
//       console.log("No markers to save.");
//   }
// };


// const saveAddress = async (markers) => {
//   try {
//     let index = 0;
//     if (markers.length > 0) {
//       for (const marker of markers) {
//         const order = index++; // Increment index after assigning to order
//         console.log("Latitude:", marker.coordinate.latitude);
//         console.log("Longitude:", marker.coordinate.longitude);
//         console.log("Order:", order);

//         // API endpoint to save coordinates
//         const apiUrl = 'http://localhost:3000/api/coordinates';
//         const data = {
//           latitude: marker.coordinate.latitude,
//           longitude: marker.coordinate.longitude,
//           order: order
//         };

//         // Make a POST request to your API
//         const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             // Add any other headers if required
//           },
//           body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         console.log('Coordinate saved successfully:', result);
//         // Do something with the result if needed
//       }
//     } else {
//       console.log("No markers to save.");
//     }
//   } catch (error) {
//     console.error('Error saving coordinate:', error);
//     // Handle errors here
//   }
// };

// Call saveAddress function with markers array
// saveAddress(markers);

const saveAddress = () => {
  let index = 0;
  if (markers.length > 0) {
      markers.forEach((marker) => {
          const order = index++;
          const data = {
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
              order: order
          };

          // Make an HTTP POST request to the server
          fetch('http://localhost:3000/api/coordinates', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              // Handle successful response
              console.log('Address saved successfully:', data);
          })
          .catch(error => {
              // Handle error
              console.error('There was a problem saving the address:', error);
          });
      });
  } else {
      console.log("No markers to save.");
  }
};




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
