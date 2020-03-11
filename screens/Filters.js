import React, {useState, useCallback, useEffect} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { setFilters } from '../store/actions/meals'

export default function Filters({navigation}) {
  const [vegan,setVegan] = useState(false)
  const [vegetarian,setVegetarian] = useState(false)
  const [gluten,setGluten] = useState(false)

  const dispatch = useDispatch()
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree:gluten,
      isVegetarian:vegetarian,
      isVegan:vegan
    }
    dispatch(setFilters(appliedFilters))
  },[gluten,vegetarian,vegan,dispatch])

    useEffect(() => {
    // Update the document title using the browser API
    navigation.setParams({ save: saveFilters });
  },[saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters</Text>
      <View style={styles.filterContainer}>
        <Text> Gluten Free</Text>
        <Switch value={gluten} onValueChange={newValue => setGluten(newValue)}/>
        </View>
      <View style={styles.filterContainer}>
        <Text> Vegetarian</Text>
        <Switch value={vegetarian} onValueChange={newValue => setVegetarian(newValue)}/>
        </View>
      <View style={styles.filterContainer}>
        <Text> Vegan</Text>
        <Switch value={vegan} onValueChange={newValue => setVegan(newValue)}/>
      </View>
     </View>
  );
}
Filters.navigationOptions = ({navigation}) => {
  return {
  headerLeft:()=> <Ionicons 
  name="ios-menu" 
  size={32} color="white" 
  style={{marginLeft:13}}
  onPress={() => navigation.openDrawer()}/>,

  headerRight:() =><Ionicons 
  name="md-save" 
  size={32} color="white" 
  style={{marginRight:13}}
  onPress={() => {navigation.getParam('save')()}}/>
 }
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center'
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    marginTop:20
  },
  filterContainer:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-between',
    marginTop:35

  }
})