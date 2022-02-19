import { LOADED, LOADING, LoadingActionsType } from "./LoadingActions";
import LoadingState from "./LoadingState";

const defaultState: LoadingState = {
    data: false
}

export const LoadingReducer = (state: LoadingState = defaultState, action: LoadingActionsType): LoadingState => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                data: true
            };
        case LOADED:
            return {
                ...state,
                data: false
            }
        default:
            return state;
    }
}