export const getUsers = (state) =>{
    return state.content.friends.users;
}

export const getCurrentPage = (state) =>{
    return state.content.friends.currentPage;
}

export const getTotalPage = (state) =>{
    return state.content.friends.totalPages;
}

export const getIsFetching = (state) =>{
    return state.content.friends.isFetching;
}
export const getPageCount = (state) =>{
    return state.content.friends.pageCount;
}
export const getFollowingProgress = (state) =>{
    return state.content.friends.followingProgress;
}

