import uuid from 'uuid'

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      action.quote.id = uuid()
      return [...state, action.quote]
    case 'UPVOTE_QUOTE':
      return state.map(function(quote) {
        if(quote.id === action.quoteId) {
          quote.votes += 1
          return quote
        } else {
          return quote
        }
      } )
    case 'DOWNVOTE_QUOTE':
      return state.map(function(quote) {
        if(quote.id === action.quoteId) {
          if(quote.votes >0) {quote.votes -= 1}
          return quote
        } else {
          return quote
        }
      } )
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    default:
      return state;
  }
}
