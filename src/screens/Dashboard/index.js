import * as React from "react";
import { StyleSheet, View, Text , Image } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../../../GlobalStyles";
import { MaterialIcons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
     
        <Text style={styles.securcity}>SecurCity</Text>
        
        
      <Text style={styles.dangerInYour}>Stats </Text>
      <View style={styles.statsContainer}>
      <View style={[styles.statBox, styles.dangerBox]}>
          <MaterialIcons name="warning" size={60} color="red" style={styles.icon} />
          <Text style={styles.statLabel}>Danger Zones </Text><Text style={styles.statNumber}>5</Text>

        </View>
                <View style={[styles.statBox, styles.safetyBox]}>
                <MaterialIcons name="check-circle" size={60} color="green" style={styles.icon} />

          <Text style={styles.statLabel}>Safety Rate</Text><Text style={styles.statNumber}>90%</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={[styles.statBox, styles.submittedBox]}>
        <MaterialIcons name="location-pin" size={60} color="orange" style={styles.icon} />

          <Text style={styles.statLabel}>Submitted Zones</Text><Text style={styles.statNumber}>15</Text>

        </View>
        <View style={[styles.statBox, styles.reportedBox]}>
        <MaterialIcons name="notifications" size={60} color="#CC7722" style={styles.icon} />

         
          <Text style={styles.statLabel}>Reported Incidents</Text><Text style={styles.statNumber}>2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  
  securcity: {
    fontSize: FontSize.size_13xl,
    color: Color.colorMediumaquamarine,
    fontFamily: FontFamily.balooThambiMedium,
    textAlign: 'center'
  },
  dangerInYour: {
    fontSize: FontSize.size_7xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.balooThambiMedium,
    marginBottom: 20,
    textAlign: 'center', 
    
  },
  icon: {
    marginRight: 10,
    marginBottom: -15,
    marginLeft: 15
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statBox: {
    width: "48%",
    height: 210,
    borderRadius: Border.br_lg,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  dangerBox: {
    backgroundColor: "#ffa8a7",
    width: 140, // Set width and height to create a circle
    height: 140,
    borderRadius: 70, // Half of the width or height to make a circle
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  safetyBox: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: 140, // Set width and height to create a circle
    height: 140,
    borderRadius: 70, // Half of the width or height to make a circle
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  submittedBox: {
    backgroundColor: "rgba(255, 190, 157, 0.64)",
    width: 140, // Set width and height to create a circle
    height: 140,
    borderRadius: 70, // Half of the width or height to make a circle
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  reportedBox: {
    backgroundColor: "rgba(255, 199, 40, 0.22)",
    width: 140, // Set width and height to create a circle
    height: 140,
    borderRadius: 70, // Half of the width or height to make a circle
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  statNumber: {
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.balooThambiMedium,
  },
  statLabel: {
    fontSize: FontSize.size_xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.balooThambiMedium,
    textAlign: "center",
    marginTop: 10,
  },
  dangerInYourCountry: {
    fontSize: FontSize.size_7xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.balooThambiMedium,
    marginBottom: 20,
    textAlign: 'center', 
  },
  mapContainer: {
    height: 200, // Adjust the height as needed
    marginVertical: 10,
    borderRadius:20,
    overflow: 'hidden'

  },
});

export default Dashboard;
