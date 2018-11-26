import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'
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

              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
               // this exists because of the connect
               //pass the props down since QuoteCard is just a presentational component and doesnt handle state
               //too far bottom for connecting with redux state to be useful
               this.props.quotes.map(quote => {
                   return (<QuoteCard key={quote.id} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} quote={quote}/>)
               })
           }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return { quotes: state.quotes}
}

//add arguments to connect as needed
//dispatch methods for remove upvoting and downvoting
export default connect(mapStateToProps, {removeQuote,upvoteQuote,downvoteQuote} )(Quotes);
