import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, Border, FontFamily, Padding } from "../../../GlobalStyles";

const Register = ({navigation}) => {
  const [name,setName] = React.useState("")
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    navigation.replace("Login"); 
  };

  const handleSignup = () => {
    navigation.replace("Register"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
      <Text style={styles.signIn}>Sign Up</Text>
      <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.inputField}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
            keyboardType="name"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.inputField}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.logInButton} onPress={handleSignup}>
          <Text style={styles.logInButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.signUpLink}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signUpLinkText}>Sign in</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  signIn: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.balooThambiMedium,
    color: Color.labelColorLightPrimary,
    marginTop: 20, // Adjust as needed
  },
  formContainer: {
    marginTop: 30, // Adjust as needed
    width: "80%", // Adjust as needed
  },
  inputContainer: {
    marginBottom: 10, // Adjust as needed
  },
  inputLabel: {
    fontSize: FontSize.bodySmall400_size,
    fontFamily: FontFamily.bodySmall400,
    color: Color.gray600,
    marginBottom: 5, // Adjust as needed
  },
  inputField: {
    borderWidth: 1,
    borderColor: Color.gray600,
    borderRadius: Border.br_3xs,
    padding: 10,
  },
  logInButton: {
    backgroundColor: Color.colorMediumaquamarine,
    paddingVertical: 10,
    borderRadius: Border.br_sm,
    marginTop: 20, // Adjust as needed
  },
  logInButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.calloutBold_size,
    fontFamily: FontFamily.almaraiExtraBold,
    textAlign: "center",
  },
  signUpLink: {
    textAlign: "center",
    marginTop: 10, // Adjust as needed
  },
  signUpLinkText: {
    textAlign: "center",
    color: Color.colorLimegreen,
  },
});


// const styles = StyleSheet.create({
//   framePosition: {
//     width: 288,
//     left: 0,
//     top: 0,
//     position: "absolute",
//     height: 621,
//   },
//   groupPosition: {
//     height: 13,
//     left: "50%",
//     position: "absolute",
//   },
//   group1Layout: {
//     height: 21,
//     width: 44,
//     left: "50%",
//     position: "absolute",
//   },
//   timeTypo: {
//     textAlign: "center",
//     fontSize: FontSize.calloutBold_size,
//     color: Color.labelColorLightPrimary,
//     position: "absolute",
//   },
//   signUpLayout: {
//     height: 26,
//     textAlign: "center",
//     lineHeight: 21,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   nameTypo: {
//     textAlign: "left",
//     fontFamily: FontFamily.bodySmall400,
//     fontSize: FontSize.bodySmall400_size,
//   },
//   mail1SpaceBlock: {
//     marginTop: 16,
//     paddingVertical: Padding.p_lg,
//     paddingHorizontal: Padding.p_5xl,
//     alignItems: "center",
//     flexDirection: "row",
//     height: 42,
//     backgroundColor: Color.gray50,
//     borderRadius: Border.br_sm,
//     width: 257,
//   },
//   frameChild: {
//     borderRadius: Border.br_21xl,
//     backgroundColor: Color.colorWhite,
//   },
//   excludeIcon: {
//     width: 14,
//     height: 12,
//   },
//   vectorIcon: {
//     marginLeft: -31.65,
//     width: 15,
//     top: 1,
//     height: 12,
//     left: "50%",
//     position: "absolute",
//   },
//   darkModefalseCharge100: {
//     marginLeft: 9.25,
//     width: 22,
//     top: 0,
//   },
//   group: {
//     marginLeft: 68.7,
//     top: 13,
//     width: 63,
//   },
//   time: {
//     fontFamily: FontFamily.acmeRegular,
//     width: 54,
//     height: 20,
//     lineHeight: 21,
//     letterSpacing: 0,
//     textAlign: "center",
//     fontSize: FontSize.calloutBold_size,
//     top: 1,
//     left: 0,
//   },
//   darkModefalseTypedefault: {
//     marginLeft: -22.05,
//     borderRadius: Border.br_5xl,
//     top: 0,
//   },
//   group1: {
//     marginLeft: -127,
//     top: 9,
//   },
//   vectorIcon1: {
//     marginLeft: -72,
//     width: 141,
//     height: 32,
//     left: "50%",
//     top: 0,
//     position: "absolute",
//   },
//   frameItem: {
//     top: 611,
//     left: 93,
//     borderStyle: "solid",
//     borderColor: Color.labelColorLightPrimary,
//     borderTopWidth: 4,
//     width: 103,
//     height: 4,
//     position: "absolute",
//   },
//   signUp: {
//     top: 162,
//     left: 67,
//     fontSize: FontSize.size_13xl,
//     fontFamily: FontFamily.balooThambi,
//     width: 153,
//     color: Color.labelColorLightPrimary,
//   },
//   frameInner: {
//     top: 517,
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.colorMediumaquamarine,
//     width: 259,
//     height: 37,
//     left: 15,
//     position: "absolute",
//   },
//   getStarted: {
//     top: 524,
//     left: 89,
//     fontWeight: "800",
//     fontFamily: FontFamily.almaraiExtraBold,
//     width: 109,
//     height: 22,
//     textAlign: "center",
//     fontSize: FontSize.calloutBold_size,
//   },
//   alreadyHaveAn: {
//     color: Color.colorDimgray,
//   },
//   text: {
//     color: Color.labelColorLightPrimary,
//   },
//   logIn: {
//     color: Color.colorLimegreen,
//   },
//   alreadyHaveAnContainer: {
//     top: 565,
//     left: 29,
//     fontSize: FontSize.size_mini,
//     fontWeight: "700",
//     fontFamily: FontFamily.almaraiBold,
//     width: 226,
//   },
//   unionIcon: {
//     width: 64,
//     height: 64,
//   },
//   name: {
//     width: 239,
//     color: Color.gray600,
//     lineHeight: 24,
//     textAlign: "left",
//     fontFamily: FontFamily.bodySmall400,
//     fontSize: FontSize.bodySmall400_size,
//   },
//   mail: {
//     paddingVertical: Padding.p_lg,
//     paddingHorizontal: Padding.p_5xl,
//     alignItems: "center",
//     height: 42,
//     borderRadius: Border.br_sm,
//     justifyContent: "center",
//     flexDirection: "row",
//     backgroundColor: Color.gray50,
//     width: 257,
//   },
//   emailphoneNumber: {
//     width: 236,
//     color: Color.gray600,
//     lineHeight: 24,
//     textAlign: "left",
//     fontFamily: FontFamily.bodySmall400,
//     fontSize: FontSize.bodySmall400_size,
//   },
//   mail1: {
//     justifyContent: "center",
//     marginTop: 16,
//   },
//   password1: {
//     width: 191,
//     color: Color.gray600,
//     lineHeight: 24,
//     textAlign: "left",
//     fontFamily: FontFamily.bodySmall400,
//     fontSize: FontSize.bodySmall400_size,
//   },
//   visibilityOffIcon: {
//     height: 15,
//     overflow: "hidden",
//     marginLeft: 16,
//     width: 15,
//   },
//   facebookGoogleMailPassw: {
//     top: 233,
//     width: 257,
//     left: 15,
//     position: "absolute",
//   },
//   rectangleView: {
//     borderRadius: 5,
//     width: 19,
//     height: 19,
//     backgroundColor: Color.gray50,
//   },
//   iAgreeTo: {
//     color: Color.colorDarkslategray,
//   },
//   termsOfService: {
//     color: Color.colorMediumslateblue,
//   },
//   iAgreeToContainer: {
//     lineHeight: 22,
//     width: 230,
//     marginLeft: 14,
//     textAlign: "left",
//     fontFamily: FontFamily.bodySmall400,
//     fontSize: FontSize.bodySmall400_size,
//     height: 42,
//   },
//   rectangleGroup: {
//     top: 451,
//     flexDirection: "row",
//     left: 15,
//     position: "absolute",
//   },
//   groupParent: {
//     flex: 1,
//     width: "100%",
//     height: 621,
//   },
// });

export default Register;
{/* <View style={styles.rectangleGroup}>
          <View style={styles.rectangleView} />
          <Text style={[styles.iAgreeToContainer, styles.nameTypo]}>
            <Text style={styles.iAgreeTo}>{`I agree to The `}</Text>
            <Text style={styles.termsOfService}>Terms of Service</Text>
            <Text style={styles.iAgreeTo}>{` and `}</Text>
            <Text style={styles.termsOfService}>Privacy Policy</Text>
          </Text>
        </View> */}