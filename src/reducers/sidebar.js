const initialState = {
  HomeStatus: true,
  TeamSatus: false,
  PointsTableSatus: false,
  ScoreSatus: false,
  MomSatus: false
}

export default function (state = initialState, action) {

  switch (action.type) {
    case 'GET_HOME':
      return {
        ...state,
        HomeStatus: true,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: false
      }
    case 'GET_TEAMS':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: true,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: false
      }
    case 'GET_POINTSTABLE':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: true,
        ScoreSatus: false,
        MomSatus: false
      }
    case 'GET_SCORE':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: true,
        MomSatus: false
      }
    case 'GET_MOM':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: true
      }
    default:
      return state;
  }
}