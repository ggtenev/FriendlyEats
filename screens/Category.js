import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {useSelector} from 'react-redux'
import Categories from './Categories';


import Card from '../components/MealCard'

export default function Category({ navigation }) {
  const title = navigation.getParam('title')
  const catID = navigation.getParam('id')

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(m => m.categoryID.indexOf(catID) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        style={styles.list}
        renderItem={({ item }) => {
          return <Card title={item.title} img={item.imageURL}
            afford={item.affordability}
            complex={item.complexity}
            duration={item.duration}
            ingredients={item.ingredients}
            ingredients={item.ingredients}
            steps={item.steps}
            isGlutenFree={item.isGlutenFree}
            isVegan={item.isVegan}
            isVegetarian={item.isVegetarian}
            isLactoseFree={item.isLactoseFree}
            navigation={navigation}
            id={item.id}
            // addToFavourites={addToFavourites}
          />
        }}
      />

    </View>
  );
}

Category.navigationOptions = (navData) => {
  const title = navData.navigation.getParam('title')
  return {
    headerTitle: title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list:{
    width:'95%'
  }
})