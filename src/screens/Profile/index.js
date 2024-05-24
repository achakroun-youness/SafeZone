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
        uri: user.isEtat
          ? "data:image/png;base64,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"
          : "data:image/png;base64,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" 
      }}
      style={styles.profile}
    />
        <View> 
          <Text style={styles.label}> Profile informations 
          </Text>
        </View>
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
        <TouchableOpacity 
          style={user.isEtat ? [styles.logoutButton, { backgroundColor: 'red' }] : styles.logoutButton} 
          onPress={handleLogOut}>
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
    marginTop: -50, 
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 99,
    borderColor: "#fff",
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -50, 
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
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
    fontSize: 20,
    fontFamily: "BalooThambi2-ExtraBold",
    marginBottom: -1,
    color: "#555",
    marginTop: 20,
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
