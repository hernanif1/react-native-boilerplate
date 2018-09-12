const GET_HOME = 'GET_HOME';
const SET_HOME = 'SET_HOME';

/* Actions ------------- */
const get = () => ({ type: GET_HOME });
const success = (home: Object) => ({ type: SET_HOME, home });

type Action = $Call<typeof get> | $Call<typeof success, Object>;

/* Reducer ------------------- */
const initialState = {
  home: {},
};

const reducer = (state: typeof initialState = initialState, action: Action) => {
  switch (action.type) {
    case GET_HOME:
      return { ...state };
    case SET_HOME:
      return { ...state, home: { ...action.home } };
    default:
      return state;
  }
};

export { get, success, reducer, GET_HOME, SET_HOME };
