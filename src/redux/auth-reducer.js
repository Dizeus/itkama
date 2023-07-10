import {api} from "../api/api";

let SET_IS_FETCHING = "SET_IS_FETCHING";
let SET_AUTH = "SET_AUTH";

let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
    isFetching: true,
    isLogin: false
};
function authReducer(state = initialState, action){
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                userId: action.id,
                email: action.email,
                login: action.login,
                isLogin: action.isLogin

            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
      default:
        return state;
    }
}
export const setAuth = (id,email,login, isLogin) => ({ type: SET_AUTH, id, email, login, isLogin });

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export const getAuthUser = () =>{
    return (dispatch)=>{
        dispatch(setIsFetching(true))
        return api.getAuthUser().then(
            (data)=> {
                dispatch(setIsFetching(false))
                if(data.resultCode===0) {
                    dispatch(setAuth(data.data.id, data.data.email, data.data.login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe, setStatus) =>{
    return (dispatch)=>{
        api.login(email, password, rememberMe).then(
            (data)=> {
                if(data.resultCode===0) {
                    dispatch(getAuthUser())
                }else{
                    setStatus({error:data.messages})
                    console.log({error:data.messages})
                }
            })
    }
}
export const logout = (email, password, rememberMe) =>{
    return (dispatch)=>{
        api.logout().then(
            (data)=> {
                if(data.resultCode===0) {
                    dispatch(setAuth(null, null, null, false))
                }
            })
    }
}
export default authReducer;