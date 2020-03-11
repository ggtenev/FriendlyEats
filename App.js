import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import HomeStack from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/mealsReducer'

const rootReducer = combineReducers({
  meals:mealsReducer
})
const store = createStore(rootReducer)

const loadFonts = () => {
  Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
}

export default function App (){
  const [fontLoaded,setFontLoaded] = useState(false)
 
    if (!fontLoaded) {
      return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => setFontLoaded(true)}
        />
      ); }
      return <Provider store={store}><HomeStack /></Provider>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
