import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { toggleFavorites } from '../store/actions/meals'


export default function MealDetails({ navigation }) {

  const mealID = navigation.getParam('id')
  const favoriteMeals = useSelector(state => state.meals.favMeals)
  const isFavorite = favoriteMeals.some(m =>m.id === mealID )
  
  const dispatch = useDispatch()
  const toggleFav = useCallback(() => {
    dispatch(toggleFavorites(mealID))
  },[dispatch,mealID])

  const meals = useSelector(state => state.meals.meals)
  useEffect(() => {
   navigation.setParams({toggleFav})
  },[toggleFav,])

  useEffect(() => {
   navigation.setParams({isFavorite})
  },[isFavorite])

  const meal = meals.find(m => m.id === mealID)
  
  let j = 0
  const ingredients = meal.ingredients.map(i => {
    return (
      <Text key={Math.random()} style={styles.ingredient}>{i}</Text>
    )
  })
  const steps = meal.steps.map(s => {
    j++
    return (
      <Text key={j} style={styles.ingredient}><Text style={{ fontWeight: 'bold', fontSize: 24 }}>{j}</Text>.{s}</Text>
    )
  })
 

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: meal.imageURL }} style={styles.img} />
        <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
        <View style={{ alignItems: 'center' }}>
          {ingredients}
        </View>
        <Text style={styles.ingredientsTitle}>STEPS</Text>
        {steps}
      </ScrollView>
    </View>
  );
}

MealDetails.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('title')
  const toggleFav = navigation.getParam('toggleFav')
  const isFavorite = navigation.getParam('isFavorite')
  return {
    title: title,
    headerRight: () => {
      return <TouchableOpacity style={{ marginRight: 12 }} onPress={toggleFav} >
        <Ionicons name= {isFavorite ? "md-star" : 'md-star-outline'} size={32} color={Platform.OS === 'android' ? 'white' : 'red'} />
      </TouchableOpacity>
    }
  }
}
// onPress={navigation.getParam('addToFavourites')}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 200
  },
  ingredient: {
    fontSize: 18,
    marginLeft: 5,
    marginVertical: 3,

  },
  ingredientsTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',

  }
})