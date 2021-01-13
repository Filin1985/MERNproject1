import { GET_PROFILE, PROFILE_ERRORS } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case PROFILE_ERRORS:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}