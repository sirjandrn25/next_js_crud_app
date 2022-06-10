import React, { useReducer } from 'react'

const initialState = {
  value: '',
  inputValid: false,
  inputTouch: false,
}

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'user_input':
      return {
        ...state,
        value: action.payload.value.trim(),
        inputValid: action.payload.error ? false : true,
      }
    case 'input_blur':
      return {
        ...state,
        inputTouch: true,
      }
    case 'input_reset':
      return {
        ...state,
        inputTouch: false,
        value: '',
      }
    default:
      return state
  }
}

const useInput = (validateFunc) => {
  const [state, dispatch] = useReducer(inputReducer, initialState)
  const error = state.inputTouch && validateFunc(state.value)

  const inputChangeHandler = (e) => {
    // console.log(e.target.value)
    dispatch({ type: 'user_input', payload: { value: e.target.value, error } })
  }

  const inputBlurHandler = (e) => {
    dispatch({ type: 'input_blur' })
  }

  const inputResetHandler = (e) => {
    dispatch({ type: 'input_reset' })
  }

  return {
    inputState: state,
    inputChangeHandler,
    error,
    inputBlurHandler,
    inputResetHandler,
  }
}

export default useInput
