import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Barcode from "./Barcode";

export default function App() {
  return (
    <Barcode />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
