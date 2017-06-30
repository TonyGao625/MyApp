import { combineReducers } from 'redux';

import userLoginReducer from './user.login.reducer';
import imageCarouselReducer from './image.carousel.reducer';

export default combineReducers({
    userLoginReducer,
    imageCarouselReducer,
});