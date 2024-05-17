import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { FontFamily, Color, FontSize } from "../../../GlobalStyles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GoogleMapsScreen from '../Googlemaps';

const { height, width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const NavigationFrame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.securcity}>SecurCity</Text>
      <View style={styles.contentWrapper}>
        <Tab.Navigator>
          <Tab.Screen
            name={"Location"}
            component={GoogleMapsScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require('../../../assets/vector2.png')}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: focused ? Color.colorMediumaquamarine : Color.gray50,
                  }}
                />
              ),
              tabBarActiveTintColor: Color.colorMediumaquamarine,
              tabBarInactiveTintColor: Color.gray50,
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
  },
  securcity: {
    fontSize: FontSize.size_13xl,
    color: Color.colorMediumaquamarine,
    fontFamily: FontFamily.balooThambiMedium,
    textAlign: 'center',
  },
});

export default NavigationFrame;
