import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity  } from "react-native";
import { Color, Border, FontSize, FontFamily} from "../../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../auth/authSlice";

const Profile = ({navigation}) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <View style={styles.profile}>
      <View style={styles.header}>
        <Text style={styles.profileTitle}>Profile</Text>
        <View style={styles.search} />
      </View>
      <View style={styles.profilePictureContainer}>
        <Image
          style={styles.profilePicture}
          source={require("../../../assets/ellipse-8.png")}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.infoText}>{user.name}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <View style={styles.logoutButton}>
          <TouchableOpacity onPress={handleLogOut}>
          <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileTitle: {
    fontSize: FontSize.size_13xl,
    color: Color.colorMediumaquamarine,
    fontFamily: FontFamily.balooThambiMedium,
    textAlign: 'center'
  },
  profilePictureContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
  },
  infoContainer: {
    alignItems: "center",
  },
  infoBox: {
    width: "100%",
    backgroundColor: Color.colorGhostwhite_100,
    borderRadius: Border.br_3xs,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    fontFamily: FontFamily.balooThambiExtraBold,
    marginBottom: 5,
  },
  infoText: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    fontFamily: FontFamily.balooThambiRegular,
    fontWeight: "300",
    textAlign: "center",
  },
  logoutContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  logoutButton: {
    width: 120,
    height: 43,
    borderRadius: 10,
    backgroundColor: Color.colorMediumaquamarine,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.balooThambiExtraBold,
  },
});

export default Profile;
