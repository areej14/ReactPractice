import {createStore} from 'redux'
import  rootReducers from './Reducer'
const Store = createStore(rootReducers);
export default Store;