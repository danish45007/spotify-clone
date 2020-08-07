// inital state of app
export const initalState = {
    user: null,
    token:null,
    playlist: [],
    playing: false,
    item: null
}

const reducer = (state,action) => {
    console.log(action)
    // action => action.type && [action.payload]
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        default:
            return state 
    }

}

export default reducer;