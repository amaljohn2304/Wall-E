import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/home";

export default function App() {
  var main = "#F4F9F9";
  var sub = "#CCF2F4";
  var accent = "#A4EBF3";
  var accent2 = "#AAAAAA";
  return (
    <View style={{ top: 25, height: '100%' }}>
      <Home />
    </View >
  );
}


