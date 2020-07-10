import { combineReducers} from 'redux'
import sidebar from './sidebar'
import home_api from './home_api'
import points_table from './points_table'
import mom from './mom'

export default combineReducers({
    sidebar,
    home_api,
    points_table,
    mom
})