import React, { useState } from 'react';
import { View, Button } from 'react-native';
import markerIcon from '../assets/markerIcon.png';
import MapView, { Marker, Polyline, mapKit } from 'react-native-maps';
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
  // polyline coordinates
  const [polylineCoords, setPolylineCoords] = useState([]);

  // setting markers
  const onMapPress = (e) => {
    const newMarker = {
      coordinate: e.nativeEvent.coordinate,
      key: id++,
    };
    setMarkers([...markers, newMarker]);
    console.log('New Marker Added:', newMarker);
  
    // Add coordinate to polyline
    setPolylineCoords([...polylineCoords, e.nativeEvent.coordinate]);
  };
  

 // save coordinates and zone
const saveCoordAndZone = async () => {
  if (markers.length > 0) {
    const markerData = markers.map((marker, index) => {
      const data = {
        longitude: marker.coordinate.longitude,
        latitude: marker.coordinate.latitude,
        order: index,
      };
      console.log(data);
      return data;
    });

    try {
      // Post marker data to save coordinates
      const coordApiUrl = 'http://192.168.56.1:3000/api/coordinates';
      const coordResponse = await fetch(coordApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(markerData),

        
      });

      if (coordResponse.ok) {
        console.log('Markers saved to database successfully.');

        // Get the IDs of saved coordinates
        const coordinateIds = await coordResponse.json();

        // Post zone data to save zone
        // const zoneApiUrl = 'http://192.168.56.1:3000/api/zone';
        // const zoneResponse = await fetch(zoneApiUrl, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ coordinates: coordinateIds }),
        // });

        if (zoneResponse.ok) {
          console.log('Zone saved to database successfully.');
        } else {
          console.error('Failed to save zone to database.');
        }
      } else {
        console.error('Failed to save markers to database.');
      }
    } catch (error) {
      console.error('Error saving data to database:', error);
    }
  } else {
    console.log('No markers to save.');
  }
};


  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={mapKit}
        initialRegion={region}
        onPress={(e) => onMapPress(e)}
      >
        {/* Render markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            image={markerIcon}
            style={styles.markerIcon}
          />
        ))}

        {/* Render polyline */}
        <Polyline
          coordinates={polylineCoords}
          strokeColor="#FF0000" // red color
          strokeWidth={2}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveCoordAndZone} style={styles.button} />
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
