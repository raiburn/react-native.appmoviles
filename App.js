import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Title } from 'react-native-paper';
import TextComponent from './components/TextComponent.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Title>meh</Title>
      <TextComponent/>
      <StatusBar style="auto" />
    </View>
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
