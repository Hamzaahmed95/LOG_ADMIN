import { combineReducers} from 'redux'
import sidebar from './sidebar'
import home_api from './home_api'

export default combineReducers({
    sidebar,
    home_api
})