import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'

const initialState = {
  meals:MEALS,
  favMeals:[],
  filteredMeals:MEALS
}

const mealsReducer = (state=initialState,action) => {
  switch(action.type){
    case TOGGLE_FAVORITE:
      const existingIndex = state.favMeals.findIndex(m => m.id === action.id)
      if(existingIndex >= 0){
        let newFavs = [...state.favMeals]
        newFavs.splice(existingIndex,1)
        return{...state,favMeals:newFavs}
      } else{
        const meal = state.meals.find(m => m.id === action.id)
        return{...state, favMeals:state.favMeals.concat(meal)}
      }
      case SET_FILTERS:
        const filters = action.filters
        const filteredMeals = state.meals.filter(m => {
          if(filters.isVegan && !m.isVegan) return false
          if(filters.isVegetarian && !m.isVegetarian) return false
          if(filters.GlutenFree && !m.isGlutenFree) return false
          return true
        })
        return {...state,filteredMeals }

      default:
        return state
  }
  
}

export default mealsReducer