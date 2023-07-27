import {api} from "../api/api";

let SET_IS_FETCHING = "SET_IS_FETCHING";
let SET_AUTH = "SET_AUTH";
const CAPTCHA_URL_SUCCESS = "CAPTCHA_URL_SUCCESS";
let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
    isFetching: true,
    isLogin: false,
    captchaUrl: null
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
        case CAPTCHA_URL_SUCCESS:
            console.log(action.captchaUrl)
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
      default:
        return state;
    }
}
export const setAuth = (id,email,login, isLogin) => ({ type: SET_AUTH, id, email, login, isLogin });

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export const requestCaptchaUrlSuccess = (captchaUrl) => ({ type: CAPTCHA_URL_SUCCESS, captchaUrl });

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

export const login = (email, password, rememberMe, setStatus, captcha) =>{
    return (dispatch)=>{
        api.login(email, password, rememberMe, captcha).then(
            (data)=> {
                if(data.resultCode===0) {
                    dispatch(getAuthUser())
                }else{
                    if(data.resultCode===10){
                        api.captchaUrl().then(
                            (data)=> {
                                dispatch(requestCaptchaUrlSuccess(data.url))
                            })
                    }
                    setStatus({error:data.messages})

                }
            })
    }
}
/*export const requestCaptchaUrl = () =>{
    return (dispatch)=>{
        api.captchaUrl().then(
            (data)=> {
                requestCaptchaUrlSuccess(data.url)
            })
    }
}*/
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