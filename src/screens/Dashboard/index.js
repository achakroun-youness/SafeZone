import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?`;

const states = [
  { name: 'Danger Zones', icon: 'warning', devices: 4 },
  { name: 'Safety Rate', icon: 'shield', devices: 6 },
  { name: 'Submitted Zones', icon: 'location-pin', devices: 6 },
  { name: 'Reported incidents', icon: 'notifications', devices: 4 },
];

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
    const intervalId = setInterval(fetchWeather, 20000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchWeather = async () => {
    try {
      const savedLocation = await AsyncStorage.getItem('currentLocation');
      console.log(savedLocation);
      if (savedLocation) {
        const { latitude, longitude } = JSON.parse(savedLocation);
        const response = await axios.get(`${WEATHER_API_URL}lat=${latitude}&lon=${longitude}&appid=a7a5e76f081927c3f4f5febc192e9ce3`);
        setWeather(response.data);
        console.log(response.data);
      } else {
        setError('Location data not found. Please enable location services.');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError('Error fetching weather data. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        {loading ? (
          <Text style={styles.weatherText}>Loading weather...</Text>
        ) : error ? (
          <Text style={styles.weatherText}>{error}</Text>
        ) : (
          <Text style={styles.weatherText}>
            {weather && weather.main && weather.weather && `${weather.main.temp}°C,${weather.name} ,${weather.weather[0].description}`}
          </Text>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.roomsContainer}>
        {states.map((room, index) => (
          <TouchableOpacity key={index} style={styles.roomCard}>
            <View style={styles.roomInfo}>
              <MaterialIcons name={room.icon} size={40} color="black" />
              <Text style={styles.roomName}>{room.name}</Text>
            </View>
            <Text style={styles.deviceCount}>{room.devices}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4AC86',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weatherText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  roomsContainer: {
    paddingVertical: 20,
  },
  roomCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    elevation: 2,
  },
  roomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deviceCount: {
    fontSize: 14,
    color: '#666',
  },
});
