const AUTH = 'auth/AUTH';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAIL = 'auth/REGISTER_FAIL';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';

const EMPTYSTATU = 'auth/EMPTYSTATU';

const TEST2 = 'auth/TEST2';

const GETUSER = 'auth/GETUSER';
const GETUSER_SUCCESS = 'auth/GETUSER_SUCCESS';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: action.data
      };
    case LOGIN:
      return {
        ...state,
        requesting: true,
        requested: false,
      };
    case LOGIN_SUCCESS:
      const {
        data: {
          token = '',
          auth,
          err,
          message
        }
      } = action.res;
      localStorage.setItem('tid', token);
      return {
        ...state,
        requesting: false,
        requested: true,
        auth,
        err,
        message
      };
    case LOGIN_FAIL:
      return {
        ...state,
        requesting: false,
        requested: true,
        loginError: action.error
      };
    case REGISTER:
      return {
        ...state,
        requesting: true,
        requested: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        message: action.res.data.message
      };
    case REGISTER_FAIL:
      return {
        ...state,
        requesting: false,
        newUser: null,
        registerError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: false,
        user: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null
      };
    case EMPTYSTATU:
      return {
        ...state,
        requested: false,
        message: ''
      };
    case GETUSER_SUCCESS:
      return {
        ...state,
        userList: action.res.data.userList
      };
    case TEST2:
      return {
        ...state,
        testcon: '测试内容'
      };
    default:
      return state;
  }
}

export function authed() {
  return function (dispatch, getState) {
    axios.get('/api/auth')
      .then((response) => {
        dispatch({
          type: AUTH,
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: LOGIN_FAIL,
          payload: error
        });
      });
  };
}

export function login(user, pass) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: axios.post('/auth/login', {user, pass})
  };
}


export function register(user, pass) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: axios.post('/auth/register', {user, pass})
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS],
    promise: axios.post('/auth/logout')
  };
}

export function emptyStatu() {
  return {
    type: EMPTYSTATU
  };
}

export function getuser() {
  return {
    types: [GETUSER, GETUSER_SUCCESS],
    promise: axios.get('/api/getuser')
  };
}
export function test2() {
  return {
    type: TEST2,
    text: '一些传值数据'
  };
}
