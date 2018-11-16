import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvote, upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes ? this.props.quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={this.props.upvoteQuote} deleteQuote={this.props.deleteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote}/>) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
