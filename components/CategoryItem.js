import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryItem({ navigation, item }) {
  return (
    <TouchableOpacity
    style={{ ...styles.card, backgroundColor: item.color }}
    onPress={() => navigation.navigate('Category', {
      title:item.title,
      id:item.id
    })}>
      <View >
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: '40%',
    flex: 1,
    margin: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 8,
    shadowColor:'grey',
    elevation:5,
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    justifyContent:'flex-end',

  },
  title: {
    fontSize: 21,
    fontWeight:'bold',
    letterSpacing:1,
  }
})