import { ActionCreator } from "./store/action";

export const updateUser = (id) => (dispatch) => {
  dispatch(ActionCreator.updateUser(id));
};

export const resetZoomUser = (id) => (dispatch) => {
  dispatch(ActionCreator.resetZoomUser(id));
};
