export default (state = [], action) => {
  let quote, quoteIndex

  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[quoteIndex]
      return [...state.slice(0, quoteIndex),
             {...quote, votes: quote.votes + 1},
              ...state.slice(quoteIndex + 1)
             ]
    case "DOWNVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0){
        quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
        quote = state[quoteIndex]
        return [...state.slice(0, quoteIndex),
               {...quote, votes: quote.votes - 1},
                ...state.slice(quoteIndex + 1)
               ]
      } else {state}
    default:
      return state;
  }
}
