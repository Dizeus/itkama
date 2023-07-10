import {api} from "../../api/api";

let FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
//let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_PAGE = "SET_TOTAL_PAGE";
let SET_IS_FETCHING = "SET_IS_FETCHING";
let SET_FOLLOW_PROGRESS = "SET_FOLLOW_PROGRESS";
export default function friendsReducer(state, action) {

  switch (action.type) {

    case FOLLOW_TOGGLE:
      return {
        ...state,
        users:state.users.map(user=>{
          return action.userId === user.id?
              {...user, followed: !user.followed}:
              user;
          })
        }
/*    case UNFOLLOW:
      return {
        ...state,
        users:state.users.map(user=>{
          return action.userId === user.id?
              {...user, followed: !user.followed}:
              user;
        })
      }*/
    case SET_USERS:
      return {
        ...state,
        users:[...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case SET_TOTAL_PAGE:
      return {
        ...state,
        totalPages: action.count
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_FOLLOW_PROGRESS:
     return {
        ...state,
        followingProgress: action.inProgress?[...state.followingProgress, action.userId]:state.followingProgress.filter(id=>id!=action.userId)
      }
    default:
      return state;
  }

}

export const followToggle= (userId) => ({ type: FOLLOW_TOGGLE, userId });
//export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalPage = (count) => ({ type: SET_TOTAL_PAGE, count });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setFollowProgress = (userId, inProgress) => ({ type: SET_FOLLOW_PROGRESS, userId, inProgress });

export const requestUsers  = (pageCount, currentPage) =>{
  return  (dispatch)=>{
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true))
    api.getUsers(pageCount,currentPage).then(
      (data)=> {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalPage(Math.ceil(data.totalCount/5)))
      }
  )
  }
}

export const followUnfollowChange = async (dispatch, userId, apiMethod)=>{
  dispatch(setFollowProgress(userId, true));
  const response = await apiMethod(userId);
  if(response.resultCode === 0){
      dispatch(setFollowProgress(userId, false));
      dispatch(followToggle(userId))
  }
}
export const follow = (userId)=>{
  return (dispatch)=>{
    followUnfollowChange(dispatch, userId, api.follow)
  }
}

export const unfollow = (userId)=>{
  return (dispatch)=>{
    followUnfollowChange(dispatch, userId, api.unfollow)
  }
}
