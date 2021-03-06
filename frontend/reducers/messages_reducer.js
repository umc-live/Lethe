
import {RECEIVE_MESSAGES, RECEIVE_MESSAGE} from '../actions/message_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.id]: action.message});
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
};

export default messageReducer;