import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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

  const saveAddress = () => {
    console.log(JSON.stringify(markers[0].coordinate.latitude));
  };

  return (
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
          pinColor={marker.color}
        >
          <View style={styles.marker}>
            <Text style={styles.text}>
              {JSON.stringify(marker.coordinate)}
            </Text>
          </View>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = {
  marker: {
    backgroundColor: '#FFC728',
    padding: 5,
    borderRadius: 5,
  },
  customMarker: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
};

export default GoogleMapsScreen;
