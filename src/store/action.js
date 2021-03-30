const ActionType = {
  UPDATE_USER: "UPDATE_USER",
  RESET_ZOOM_USER: "RESET_ZOOM_USER",
  OPEN_VIDEO: "OPEN_VIDEO",
  CLOSE_VIDEO: "CLOSE_VIDEO",
};

const ActionCreator = {
  updateUser: (payload) => ({
    type: ActionType.UPDATE_USER,
    payload,
  }),
  resetZoomUser: (payload) => ({
    type: ActionType.RESET_ZOOM_USER,
    payload,
  }),
  handlePlayBtn: () => ({
    type: ActionType.OPEN_VIDEO,
  }),
  closePopupBtn: () => ({
    type: ActionType.CLOSE_VIDEO,
  }),
};

export { ActionCreator, ActionType };
