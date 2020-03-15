import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  error: false,
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_ERROR': {
        draft.loading = true;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
