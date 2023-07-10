import {getAuthUser} from "./auth-reducer";

let SET_INITIALIZED = "SET_INITIALIZED";
let SET_INITIALIZED_FETCHING = "SET_INITIALIZED_FETCHING";
let initialState = {
    isInitialized: true,
    isInitializationFetching: true,
};
function appReducer(state = initialState, action){
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
               isInitialized: false
            }
        default:
            return state;
    }
}
export const setInitializedSuccess = () => ({ type: SET_INITIALIZED});
export const setIsFetching = (isFetching) => ({ type: SET_INITIALIZED_FETCHING, isFetching });

export const initializeApp = () => (dispatch)=>{
    let promise = dispatch(getAuthUser())
    Promise.all([promise]).then(
        ()=>{
            dispatch(setInitializedSuccess())
        }
    )
}
export default appReducer;