import { ADD_FOO } from 'store/actions/foo';

const initialState = {
  foos: [],
};

export default (state = initialState, action) => {
  if (action.type === ADD_FOO) {
    return {
      ...state,
      foos: [...state.foos, 'foo'],
    };
  }

  return state;
};
