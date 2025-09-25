import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import Map from "./components/Map.web";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.map}>
        <Map latitude={52.289588} longitude={104.280606} />
      </View>
      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Отслеживание прогулки</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
  },
  map: {
    flex: 2,
  },
  menu: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "400",
  },
});
