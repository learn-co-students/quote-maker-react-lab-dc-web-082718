export default (state = [], action) => {

    //default values
    let idx;
    let qt;
    switch(action.type){

        case "ADD_QUOTE":
             return [...state, action.quote];
        case "REMOVE_QUOTE":
            return state.filter(quote => quote.id !== action.quoteId);
        case "UPVOTE_QUOTE":
            idx = state.findIndex(quote => quote.id === action.quoteId); //index
            qt = state[idx]; //quote
            return [...state.slice(0,idx),Object.assign({},qt,{votes: qt.votes + 1}),...state.slice(idx+1)]
        case "DOWNVOTE_QUOTE":
            idx = state.findIndex(quote => quote.id === action.quoteId); //index
            qt = state[idx]; //quote
             if (qt.votes > 0) {
                 return [...state.slice(0,idx),Object.assign({},qt,{votes: qt.votes - 1}),...state.slice(idx+1)]
            }
            return state;
        default:
          return state;
    }






}
