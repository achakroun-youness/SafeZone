import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.container}>
     
      <View style={{width: '100%'}}>
                    <Image 
                    source={{uri:"https://t3.ftcdn.net/jpg/03/18/46/00/360_F_318460000_Mjn1Z5FSfjoXLrvOQMh5ymyT0lL0hV9t.jpg"}}
                    style={styles.cover}/>
                </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
                    source={{uri:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"}}
                    style={styles.profile}
                    />
        
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
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
                 <Text style={styles.logoutText}>L O G O U T</Text>
                </TouchableOpacity>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({

  
  
  infoBox: {
    width: "100%",
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    
    fontFamily: 'BalooThambi2-ExtraBold',
    marginBottom: -3,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Garamond, serif',
    fontWeight: "300",
    textAlign: "center",
  },
  logoutContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logoutButton: {
    width: 140,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0089B9',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: -230
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'BalooThambi2-ExtraBold',
  },
  container:{
    flex: 1,
    backgroundColor : '#ffff'
},
cover:{
  height: 290,
  width: "100%",
  resizeMode: "cover"
},
profileContainer:{
  flex: 1,
  alignItems: "center",
  marginTop: -90

},
profile : {
  height: 155,
  width :155,
  borderRadius: 99,
  borderColor: "#ffff",
  borderWidth:2,
  resizeMode: "cover",
  marginTop: -130


},
});

export default Profile;
