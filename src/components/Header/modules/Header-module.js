/**
 * Created by luqianyu on 2017/1/2.
 */
export const HEADER_LOGIN = 'HEADER_LOGIN'
export const HEADER_SINGOUT = 'HEADER_SIGNOUT'

// actions

export function login (user, password) {
  return {
    type: HEADER_LOGIN,
    user: user,
    password: password
  }
}

export function signOut () {
  return {
    type: HEADER_SINGOUT
  }
}

export const actions = {
  login,
  signOut
}

// Reducer

const initeState = {
  userId: null,
  isLogin: false,
  user: null,
  password: null
}

export default function headerReducer (state = initeState, action) {
  switch (action.type) {
    case HEADER_LOGIN:
      return {
        isLogin: true,
        user: action.user,
        password: action.password
      }
      break
    case HEADER_SINGOUT:
      return {
        isLogin: false,
        user: null,
        password: null
      }
      break
    default:
      return state
  }
}
