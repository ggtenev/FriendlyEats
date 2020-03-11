import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

import Categories from '../screens/Categories'
import Category from '../screens/Category'
import MealDetails from '../screens/MealDetails'
import Favourites from '../screens/Favourites'
import  Filters from '../screens/Filters'


const AppNavigator = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: {
      title: 'Meal Categories',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
  MealDetails: {
    screen: MealDetails,
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
},
  {
    defaultNavigationOptions: {
      headerTintColor: Platform.OS === 'android' ? '#fff' : 'black',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
      },
    }
  });

  const FavNavigator = createStackNavigator({
    Favourites:{
      screen: Favourites,
      navigationOptions: {
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }
    },
    MealDetails:MealDetails
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Platform.OS === 'android' ? '#fff' : 'black',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
      },
    }
  }
  )

  const TabNavigator = createBottomTabNavigator({
    Home:{screen:AppNavigator, navigationOptions:{
      tabBarIcon:(tabInfo) => {
        return <Ionicons name="md-home" size={32} color={tabInfo.tintColor} />
      }
    }} ,
    Favourites: {screen:FavNavigator,navigationOptions:{
      tabBarIcon:(tabInfo) => {
        return <Ionicons name="md-star" size={32} color={tabInfo.tintColor}/>
      }
    }},
  },
  {
    tabBarOptions:{
      activeTintColor:'red',
    }
  });

  const FiltersNavigator = createStackNavigator({
    Filters:{
      screen:Filters,
      navigationOptions: {
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Platform.OS === 'android' ? '#fff' : 'black',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
      },
    }
  })

  const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: TabNavigator,
    },
    Filters: {
      screen: FiltersNavigator,
    },
  },
  );


export default createAppContainer(DrawerNavigator)