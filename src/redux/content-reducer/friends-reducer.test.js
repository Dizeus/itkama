import friendsReducer, {followToggle} from "./friends-reducer";

it("friends reducer should properly work", ()=>{
    let action = followToggle(1)
    let state = {
        users: [{id:1,followed: true},{id:2, followed: false}],
        currentPage: 1,
        totalPages: 0,
        isFetching: true,
        pageCount: 5,
        followingProgress: []
    }
    let result = friendsReducer(state, action);

    expect(result.users[0].followed).toBe(false)
})

