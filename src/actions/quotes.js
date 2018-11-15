const ADD_QUOTE = "ADD_QUOTE";
const REMOVE_QUOTE = "REMOVE_QUOTE";
const UPVOTE_QUOTE = "UPVOTE_QUOTE";
const DOWNVOTE_QUOTE = "DOWNVOTE_QUOTE";
//
export function addQuote(quote) {
  return { type: ADD_QUOTE, quote};
}

export function removeQuote(quoteId) {
  return { type: REMOVE_QUOTE, quoteId };
}

export function upvoteQuote(quoteId) {
  return { type: UPVOTE_QUOTE, quoteId };
}

export function downvoteQuote(quoteId) {
  return { type: DOWNVOTE_QUOTE, quoteId };
}
