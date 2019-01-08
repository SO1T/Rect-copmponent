import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import phones from './phones'
import phonesPage from './phonesPage'

export default combineReducers({
  routing: routerReducer,
  phones,
  phonesPage
})