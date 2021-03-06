import {
  PUBLIC_USER_INFO,
  PUBLIC_SCORE_INFO,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  CLEAR_ERROR,
  USER_INFO,
  USERS,
  EVENTS_INFO,
  FACEBOOK,
  AVATAR,
  BANNER
} from '../actions/types';

let defState = {
  authenticated: false,
  error: '',
  userInfo: null,
  public_user_info: null,
  public_user_scores: null,
  dash: null,
  avatar: '',
  events: null
}

export default function(state = defState, action) {
  switch(action.type){
    case PUBLIC_USER_INFO:
      return {...state, public_user_info: action.payload};
    case PUBLIC_SCORE_INFO:
      return {...state, public_user_scores: action.payload};
    case AUTH_USER:
      return { ...state, authenticated: true, error: ''};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    case CLEAR_ERROR:
      return {...state, error: ''};
    case USER_INFO:
      return {...state, userInfo: action.payload};
    case USERS:
      return {...state, dash: action.payload};
    case EVENTS_INFO:
      return {...state, events: action.payload};
    case AVATAR:
      return {...state, avatar: action.payload};
    default:
      return state;
  }
}
