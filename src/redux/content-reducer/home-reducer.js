import {api} from "../../api/api";

let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_IS_FETCHING = "SET_IS_FETCHING";
let SET_USER_STATUS = "SET_USER_STATUS";
let UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
let SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
export default function homeReducer(state, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost={
                text: action.newPostText,
                likes: 0,
                id: state.posts[state.posts.length - 1].id + 1,
            };
            return {
                ...state,
                newPostText: "",
                posts:[...state.posts, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.txt,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userNewStatus
            }
        case UPDATE_USER_STATUS:
            return {
                ...state,
                userStatus: action.userNewStatus
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, userProfile: {...state.userProfile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  txt: text,
});
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  profile: userProfile,
});
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setUserStatus = (userNewStatus) => ({ type: SET_USER_STATUS, userNewStatus });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });



export const getUser = (userId)=>{
    return (dispatch)=>{
        dispatch(setIsFetching(true))
        api.getProfile(userId).then(
            (data)=> {

                dispatch(setUserProfile(data))
                dispatch(setIsFetching(false))
            }
        )
    }
}
export const getUserStatus = (userId)=>{
    return (dispatch)=>{
        api.getUserStatus(userId).then(
            (response)=> {
                dispatch(setUserStatus(response.data))
            }
        )
    }
}
export const updateUserStatus = (newStatus)=>{
    return (dispatch)=>{
        api.updateUserStatus(newStatus).then(
            (response)=> {
                if(response.data.resultCode === 0)
                    dispatch(setUserStatus(newStatus))
            }
        )
    }
}

export const savePhoto = (file) => async (dispatch)=>{
        api.savePhoto(file).then(
            (response)=> {
                if(response.data.resultCode === 0)
                    dispatch(savePhotoSuccess(response.data.data.photos))
            }
        )
}

export const saveNewProfileData = (values, userId) => async (dispatch)=>{
    api.saveNewProfileData(values).then(
        (response)=> {
            if(response.data.resultCode === 0) {
                api.getProfile(userId).then(
                    (data) => {
                        dispatch(setUserProfile(data))
                        dispatch(setIsFetching(false))
                    })
            }
        }
    )
}
