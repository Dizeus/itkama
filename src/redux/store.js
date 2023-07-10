import headerReducer from "./header-reducer";
import contentReducer from "./content-reducer/content-reducer.js";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    header: {},
    sidebar: {},
    content: {
      home: {
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
      },
      messages: {
        users: [
          { name: "Oleg", id: 1 },
          { name: "Olexandr", id: 2 },
          { name: "Peter", id: 3 },
          { name: "John", id: 4 },
        ],
        messagesText: [
          "Hello I am Oleg",
          "Hello I am Olexandr",
          "Hello I am Peter",
          "Hello I am John",
        ],
        newMessageText: "",
      },
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state){
    this.renderTree(state)
  },
  renderTree(state) {},
  subscribe(observer) {
    this.renderTree = observer;
  },

  dispatch(action) {
    this._state.header = headerReducer(this._state.header, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.content = contentReducer(this._state.content, action);
    this._callSubscriber(this.state);
  },
};


export default store;