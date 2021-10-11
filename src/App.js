import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import data from './data.json';
import Search from './components/Search/Search';
import Scroll from './components/Scroll/Scroll';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <Search />
      <Scroll data = {data}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
  headerText:{
    fontSize:25,
    fontWeight:"bold",
    color: 'purple',
    textAlign:"left",
    marginBottom:15,
    marginTop:10,
  }
});
