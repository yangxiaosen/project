// ------------------------------------
// Constants
// ------------------------------------
export const YANG1_CHANGEVAL = 'YANG1_CHANGEVAL'
export const YANG1_HANDLECHANGE = 'YANG1_HANDLECHANGE'

// ------------------------------------
// Actions
// ------------------------------------
/*export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}*/

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

/*export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("yang1");
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().yang1
        })
        resolve()
      }, 200)
    })
  }
}*/
export const changeval= () =>{
  var inputmsg='好的';
  return {
    type    : YANG1_CHANGEVAL,
    payload : inputmsg
  }
}

export const handlechange= () =>{
  var value='你真的输入了';
  return {
    type    : YANG1_HANDLECHANGE,
    payload : value
  }
}

export const actions = {
  changeval,
  handlechange
}

// ------------------------------------
// Action Handlers
// ------------------------------------
//什么东西?Yang1
const ACTION_HANDLERS = {
  [YANG1_CHANGEVAL]    : (state, action) => action.payload,
  [YANG1_HANDLECHANGE]    : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = '在上面输入'
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
