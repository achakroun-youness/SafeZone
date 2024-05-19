const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Loading from "./src/screens/Loading";
import Login from "./src/screens/Login";
import Start from "./src/screens/Start";
import Register from "./src/screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationFrame from "./src/screens/NavigationFrame";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Acme-Regular": require("./assets/fonts/Acme-Regular.ttf"),
    "Almarai-Bold": require("./assets/fonts/Almarai-Bold.ttf"),
    "Almarai-ExtraBold": require("./assets/fonts/Almarai-ExtraBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "BalooThambi2-Regular": require("./assets/fonts/BalooThambi2-Regular.ttf"),
    "BalooThambi2-Medium": require("./assets/fonts/BalooThambi2-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="NavigationFrame"
              component={NavigationFrame}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>}
      </NavigationContainer>
    </>
  );
};
export default App;
