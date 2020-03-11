import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'

import CategoryItem from '../components/CategoryItem'

export default function Categories({navigation}) {
  return (
    <FlatList numColumns={2}
    data={CATEGORIES}
    renderItem={({item}) => {
     return <CategoryItem item={item} navigation={navigation}/>
    }}
    keyExtractor={item => item.id}
    />
  );
}

Categories.navigationOptions = ({navigation}) => {
  return {
  headerLeft:()=> <Ionicons 
  name="ios-menu" 
  size={32} color="white" 
  style={{marginLeft:13}}
  onPress={() => navigation.openDrawer()}/>
  }
}


const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})