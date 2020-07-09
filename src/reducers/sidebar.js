const initialState = {
  HomeStatus: true,
  TeamSatus: false,
  PointsTableSatus: false,
  ScoreSatus: false,
  MomSatus: false
}

export default function (state = initialState, action) {

  switch (action.type) {
    case 'Get_Home':
      return {
        ...state,
        HomeStatus: true,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: false
      }
    case 'Get_Teams':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: true,
        PointsTableSatus: false,
        ScoreSatus: false,
        MomSatus: false
      }
    case 'Get_PointsTable':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: true,
        ScoreSatus: false,
        MomSatus: false
      }
    case 'Get_Score':
      return {
        ...state,
        HomeStatus: false,
        TeamSatus: false,
        PointsTableSatus: false,
        ScoreSatus: true,
        MomSatus: false
      }
    case 'Get_Mom':
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