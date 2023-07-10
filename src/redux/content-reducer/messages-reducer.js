let ADD_MESSAGE = "ADD-MESSAGE";

function messagesReducer(state, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesText:[...state.messagesText, action.newMessageText],
      };
    default:
      return state;
  }
}

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText});
export default messagesReducer;
