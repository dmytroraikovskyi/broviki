import { combineReducers } from 'redux';
import { reducer as dog } from '../redux';

console.log(dog);
export default combineReducers({
    dog
});
