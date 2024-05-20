import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../../../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
        <Text style={styles.securcity}>SecurCity</Text>
      <Text style={styles.dangerInYour}>Stats in your area</Text>
      <View style={styles.statsContainer}>
        <View style={[styles.statBox, styles.dangerBox]}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Danger Zones</Text>
        </View>
        <View style={[styles.statBox, styles.safetyBox]}>
          <Text style={styles.statNumber}>90%</Text>
          <Text style={styles.statLabel}>Safety Rate</Text>
        </View>
      </View>
      <Text style={styles.dangerInYourCountry}>Stats in your country</Text>
      <View style={styles.statsContainer}>
        <View style={[styles.statBox, styles.submittedBox]}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Submitted Zones</Text>
        </View>
        <View style={[styles.statBox, styles.reportedBox]}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Reported Incidents</Text>
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
  },
  safetyBox: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  submittedBox: {
    backgroundColor: "rgba(255, 190, 157, 0.64)",
  },
  reportedBox: {
    backgroundColor: "rgba(255, 199, 40, 0.22)",
  },
  statNumber: {
    fontSize: FontSize.size_33xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.balooThambiMedium,
  },
  statLabel: {
    fontSize: FontSize.size_7xl,
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
  },
});

export default Dashboard;
