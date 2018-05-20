const INITALLOGO = 'home/INITALLOGO';
const CHANGEHISTORY = 'home/CHANGEHISTORY';

const initialState = {
  movelogo: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITALLOGO:
      return {
        ...state,
        movelogo: false,
      };
    case CHANGEHISTORY:
      return {
        ...state,
        movelogo: true,
        text: action.text
      };
    default:
      return state;
  }
}

export function changeRoute() {
  return {
    type: CHANGEHISTORY,
    text: 'showDocs'
  };
}
export function initalLogo() {
  return {
    type: INITALLOGO
  };
}
