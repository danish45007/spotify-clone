// inital state of app
export const initalState = {
    user: null,
    token:"BQB_H2RpKkB6ZSGGsJjtaHI09NKIHktcAAQpMnqGgCOS28E94y33BaeCfUVd9kUg9Jf1qwSMlnYcyPGX1X_To0-Pod8z9iyk2nGAqYighWg32nby_IN0Lp3C4YqjLMPTBF9Sj6VqnekF-pc-pQATy3p8ItQBFQM28x-iqla10zJIm-6A",
    playlist: [],
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
        // the defualt case when no action type is set
        // return the exact state 
        default:
            return state 
    }

}

export default reducer;