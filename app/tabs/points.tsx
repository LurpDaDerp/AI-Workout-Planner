import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Points() {
  return (
    <View style={{alignItems: "center"}}><Text style={styles.bigText}>Points Tab</Text></View>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 40,
    color: "black",
  },
  text: {
    fontSize: 24,
    color: "black",
  },
});