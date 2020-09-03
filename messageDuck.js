export const SHOW_MESSAGE = 'SHOW_MESSAGE'


// reducer
const growlmessages = (state = {messages:[]}, action) => {
	switch (action.type) {
	case SHOW_MESSAGE:
        console.log('message-reducer action', action);
        let messages=[];
        messages.push(action.message);
		return {messages:messages};
    default:
        return state;
  }
}



// actions
export const showMessage = (message) => ({
    type: SHOW_MESSAGE,
    message:message
  })

  export function showGrowl(message) {
    return showMessage(message);
  }



export default growlmessages