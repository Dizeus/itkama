
let renderTree = (state)=>{};

let state = {
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
      newPostText:'',
    },
    messages: {
      users: [
        { name: "Oleg", id: 1 },
        { name: "Olexandr", id: 2 },
        { name: "Peter", id: 3 },
        { name: "John", id: 4 },
      ],
    },
  },
};

export function addPost(txt){
    let posts = state.content.home.posts;
    let newId = posts[posts.length-1].id+1;
    posts.push({text:txt,likes:0,id:newId})
    state.content.home.newPostText = '';
    console.log(state.content.home.posts);
    renderTree(state);
}
export function updateNewPostText(txt) {
  state.content.home.newPostText = txt;
  renderTree(state);
}

export function subscribe(observer){
  renderTree = observer;
}

export default state;