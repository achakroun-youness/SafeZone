import React, { useState } from 'react';
import { View, Button } from 'react-native';
import markerIcon from './markerIcon.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const fetch = require('node-fetch');

const LATITUDE = 31.63416;
const LONGITUDE = -7.99994;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = 0.1;

let id = 0;
const GoogleMapsScreen = () => {
  // region
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  // markers
  const [markers, setMarkers] = useState([]);

  // setting markers
  const onMapPress = (e) => {
    const newMarker = {
      coordinate: e.nativeEvent.coordinate,
      key: id++,
    };
    setMarkers([...markers, newMarker]);
    console.log('New Marker Added:', newMarker);
  };

  // save coordinates
  const saveCoord = async () => {
    if (markers.length > 0) {
      const markerData = markers.map((marker, index) => {
        const data = {
          longitude: marker.coordinate.longitude,
          latitude: marker.coordinate.latitude,
          order: index,
        };
        console.log('Marker Data:', data);
        return data;
      });

      // Post marker data to your database
      try {
        const apiUrl = 'http://192.168.1.105:3000/api/coordinates';

        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(markerData),
      });


        if (response.ok) {
          console.log('Markers saved to database successfully.');
        } else {
          console.error('Failed to save markers to database.');
        }
      } catch (error) {
        console.error('Error saving markers to database:', error);
      }
    } else {
      console.log('No markers to save.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        onPress={(e) => onMapPress(e)}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            image={markerIcon}
            style={styles.markerIcon}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveCoord} style={styles.button} />
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
