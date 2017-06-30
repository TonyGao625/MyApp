import UserConstant from '../constants/user.constant'

export default function reducer(state = {
    loginViewModel: {
        mobile: '',
        password: '',
        validatedMobile: false,
        validatedPassword: false
    },
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING:':
            return {
                ...state,
                loading: true
            }
        case UserConstant.USER_LOGIN_REGISTER:
            return {
                ...state,
                loggedUser: action.payload,
                isAuthorize: true
            }
        case UserConstant.EDIT_LOGIN_MOBILE:
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    mobile: action.payload.val,
                    validatedMobile: action.payload.isMobile
                }
            }
        case UserConstant.EDIT_LOGIN_PASSWORD:
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    password: action.payload.val,
                    validatedPassword: action.payload.isPassword
                }
            }
        default:
            return state;
    }
}