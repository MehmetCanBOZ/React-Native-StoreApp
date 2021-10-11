import React from 'react';
import {View , TextInput, StyleSheet} from 'react-native'

const Search = () => {
    return (
        <View  style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ara..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    input: {
      padding: 15,
      backgroundColor:"#dedede",
      fontSize:15,
      borderRadius:10,
    },
});
export default Search;