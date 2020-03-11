import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function MealCard({ navigation, title, img,
  afford,
  complex,
  imageURL,
  duration,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
  id,
  addToFavourites }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MealDetails', {
      id:id,
      title:title,
      addToFavourites:addToFavourites
    })}>
      <View >
        <View style={{ ...styles.mealRow, height: '85%' }}>
          <ImageBackground source={{ uri: img }} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, height: '15%', backgroundColor: 'white' }}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{duration}m</Text>
            <Text style={styles.infoText}>{complex.toUpperCase()}</Text>
            <Text style={styles.infoText}>{afford.toUpperCase()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    height: 200,

    marginVertical: 8,
    borderRadius: 8,
    padding: 5,
    elevation: 3,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3
  },
  mealRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#f5f5f5',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 6,
    paddingHorizontal: 8
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between'
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  }

})
