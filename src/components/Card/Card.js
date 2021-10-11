import React from 'react'
import {View , Text, Image, StyleSheet ,Dimensions} from 'react-native'

const Card = ({image,title,price,isInStock}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:image}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            {!isInStock && <Text style={styles.stock}>STOKTA YOK</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#dedede",
        padding: 10,
        margin:5,
        height: Dimensions.get('window').height / 2.8,
    },
    image:{
        flex: 1,
        resizeMode: 'stretch',
    },
    title:{
        marginTop:3,
        fontSize:16,
        fontWeight:'bold'
    },
    price:{
        color:"#929290",
        fontWeight:'bold',
        marginTop:5,
    },
    stock:{
        fontWeight:'bold',
        color: 'red',
    }
})

export default Card;
