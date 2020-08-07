// inital state of app
export const initalState = {
    user: null,
    token:"BQCjGytcRNp_REIHSzhMKawCWG84h9OUCsp-RlCeGWFJ36JwxM…krslFfwT1uDiy2LaATjgur0Rmn93_DIx5NG3TogFDWwSGvW1p",
    playlists: [],
    playing: false,
    item: null
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
        default:
            return state 
    }

}

export default reducer;