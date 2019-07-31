const defaultState = {
    currentUser: null,
    usersTopArtists: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case 'SET_CURRENT_USER':
          localStorage.setItem('user_id', action.payload.id);
          return {...state, currentUser: action.payload};
      case 'SET_TOP_ARTISTS':
          return { ...state, usersTopArtists: action.payload};
      case 'SET_RECOMMENDED_PLAYLIST':
          return { ...state, recommendedPlaylist: action.payload};
      default:
          return state;
  }
};

export default reducer;