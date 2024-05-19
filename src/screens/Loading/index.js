import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color } from "../../../GlobalStyles";
import { useEffect } from "react";

const Loading = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Start"); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.frameChild} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../../../assets/frame-567369794.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorMediumaquamarine,
    alignItems: "center",
    justifyContent: "center",
  },
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  frameItem: {
    width: 100,
    height: 100,
  },
});

export default Loading;
