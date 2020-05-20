import {
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_BEGIN,
    FETCH_LOGIN_SUCCESS
} from "./coinAction";

const initialState = {
    user: null,
    loading: false,
    error: null,
    isLoggedIn:false
};
export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_LOGIN_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user:action.user,
            };

        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                user: []
            };

        default:
            return state;
    }
}