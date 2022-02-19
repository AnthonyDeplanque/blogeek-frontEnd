export const LOADING = "LOADING";
export const LOADED = "LOADED";

export interface loadingAction {
    type: typeof LOADING;
}

export interface loadedAction {
    type: typeof LOADED;
}

export type LoadingActionsType = loadingAction | loadedAction;

export const loadingActions = {
    loading: ((): loadingAction => {
        return {
            type: LOADING,
        }
    }),
    loaded: ((): loadedAction => {
        return {
            type: LOADED,
        }
    })
}

export default loadingActions;