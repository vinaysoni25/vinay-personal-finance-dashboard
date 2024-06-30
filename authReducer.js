const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        error: action.payload
      };
    // Handle other cases like SIGNUP_SUCCESS, LOGOUT, etc.
    default:
      return state;
  }
};

export default authReducer;
