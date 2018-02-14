import { combineReducers } from 'redux'

import Header from './layout/header'
import Score from './layout/score'
import Sidebar from './layout/sidebar'
import Map from './top/map'
import Marker from './top/marker'
import Content from './top/content'

const main = combineReducers({
  Header,
  Score,
  Sidebar,
  Map,
  Marker,
  Content
})

export default main
