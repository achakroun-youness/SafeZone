import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../auth/authSlice";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image
          source={{
            uri: "https://t3.ftcdn.net/jpg/03/18/46/00/360_F_318460000_Mjn1Z5FSfjoXLrvOQMh5ymyT0lL0hV9t.jpg",
          }}
          style={styles.cover}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
          }}
          style={styles.profile}
        />
        <View style={styles.infoBox}>
          <Icon name="person" size={24} color="#555" style={styles.icon} />
          <Text style={styles.label}></Text>
          <Text style={styles.infoText}>{user.name}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoBox}>
          <Icon name="email" size={24} color="#555" style={styles.icon} />
          <Text style={styles.label}></Text>
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverContainer: {
    width: "100%",
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: -50, // Adjusted for sliding down
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 99,
    borderColor: "#fff",
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -50, // Adjusted for sliding down
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#B7DOE1",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: "BalooThambi2-ExtraBold",
    marginBottom: -3,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Garamond, serif",
    fontWeight: "300",
    textAlign: "center",
    marginLeft: 10,
  },
  logoutContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logoutButton: {
    width: 140,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0089B9",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "BalooThambi2-ExtraBold",
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});

export default Profile;
