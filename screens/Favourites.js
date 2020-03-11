import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/MealCard'
import {useSelector} from 'react-redux'



export default function Favourites({navigation}) {

  const favMeals = useSelector(state => state.meals.favMeals)
  if(!favMeals.length) {
    return(
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text style={{fontWeight:'bold',
      fontSize:24}}>No favourites yet. Add some !</Text>
      </View>
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={favMeals}
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

Favourites.navigationOptions = ({navigation}) => {
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
  },
  list:{
    width:'95%'
  }
})