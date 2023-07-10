import homeReducer from "./home-reducer.js";
import messagesReducer from "./messages-reducer.js";
import friendsReducer from "./friends-reducer";

let initialState = {
  home: {
    userProfile: null,
    userStatus: "",
    posts: [
      {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reprehenderit laboriosam voluptate repellendus nisi placeat, neque eveniet temporibus pariatur illum hic expedita inventore, velit distinctio laudantium! Atque, repellendus libero vero quae accusantium, ducimus tempora neque quidem quas ex, voluptatum non nostrum nisi distinctio sed reprehenderit molestiae ipsam impedit laborum architecto itaque facilis voluptate perferendis. Qui eius alias fugit?",
        likes: 10,
        id: 1,
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reprehenderit laboriosam voluptate repellendus nisi placeat, neque eveniet temporibus pariatur illum hic expedita inventore, velit distinctio laudantium!",
        likes: 6,
        id: 2,
      },
    ],
    newPostText: "",
    isFetching: true,
  },
  messages: {
    users: [
      {name: "Oleg", id: 1},
      {name: "Olexandr", id: 2},
      {name: "Peter", id: 3},
      {name: "John", id: 4},
    ],
    messagesText: [
      "Hello I am Oleg",
      "Hello I am Olexandr",
      "Hello I am Peter",
      "Hello I am John",
    ],
    newMessageText: "",
  },
  friends:{
    users: [],
    currentPage: 1,
    totalPages: 0,
    isFetching: true,
    pageCount: 5,
    followingProgress: []
  },
};
function contentReducer(state = initialState, action) {

  return {
    ...state,
    home: homeReducer(state.home, action),
    messages: messagesReducer(state.messages, action),
    friends: friendsReducer(state.friends, action)
  }
}

export default contentReducer;
