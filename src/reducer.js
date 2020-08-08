// inital state of app
export const initalState = {
    user: null,
    // token:"BQDK2v0HQ2y3QZgsJX-e2kP49B1bpS0Z4AlJWCeYNcv7eEkX0i…mW3ANeLKaH-eDPq1sjN_cT996b5ZQl53TcIHTQfG9Pw8PJTAO",
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null
}

const reducer = (state,action) => {
    console.log(action)
    // action => action.type && [action.payload]
    switch(action.type){
        // for setting the user data into the data layer
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        // for setting the token into the data layer so that token can be passed to the other components directly from the data layer 
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            }
        // the defualt case when no action type is set
        // return the exact state
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly
            } 
        default:
            return state 
    }

}

export default reducer;