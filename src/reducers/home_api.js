const initialState = {
    teamObject:[]
  }
  
  export default function (state = initialState, action) {
  
    switch (action.type) {
      case 'GET_ALL_TEAMS':
        return {
          ...state,
          teamObject: action.payload
        }
      default:
        return state;
    }
  }