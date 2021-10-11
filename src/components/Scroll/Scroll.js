import React from 'react';
import {View , FlatList, StyleSheet ,Dimensions, ScrollView} from 'react-native'
import Card from '../Card/Card';

const Scroll = ({data}) => {
    const CardRender = ({ item }) => (
        <Card image={item.imgURL} title={item.title} price={item.price} isInStock={item.inStock}/>
    );
    return (
        <FlatList 
        data = {data}
        numColumns={2}
        renderItem = {CardRender}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator ={false}
        >
        </FlatList>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
})
export default Scroll;