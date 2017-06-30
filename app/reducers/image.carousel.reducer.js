import ImageConstant from '../constants/image.constant'

export default function reducer(state = {
    visible: false,
    images: []
}, action) {
    switch (action.type) {
        case ImageConstant.OPEN_DIALOG:
            return {
                ...state,
                visible: true,
                images: action.payload
            }
        case ImageConstant.CLOSE_DIALOG:
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }
}