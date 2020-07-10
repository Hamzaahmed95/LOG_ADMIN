const initialState = {
  HomeStatus: true,
  TeamSatus: false,
  PointsTableSatus: false,
  ScoreSatus: false,
  MomSatus: false,
  CreateTeamStatus: false
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
        MomSatus: false,
        CreateTeamStatus: false
      }
    case 'GET_TEAMS':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: true,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: false,
        CreateTeamStatus: false
      }
    case 'GET_POINTSTABLE':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: true,
        ScoreSatus: false,
        MomSatus: false,
        CreateTeamStatus: false
      }
    case 'GET_SCORE':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: true,
        MomSatus: false,
        CreateTeamStatus: false
      }
    case 'GET_MOM':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: true,
        CreateTeamStatus: false
      }
      case 'GET_CREATE_TEAM':
        return {
          ...state,
          HomeStatus: false,
          TeamSatus: false,
          PointsTableSatus: false,
          ScoreSatus: false,
          MomSatus: false,
          CreateTeamStatus: true
        }
      
    default:
      return state;
  }
}