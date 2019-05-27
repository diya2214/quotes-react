import React, { Component } from 'react'

class DisplayQuote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
      // quotes: this.props.quotes
    }
  }
  componentDidMount () {}

  render () {
    // const quotess = this.state.quotes
    // const allQuotes = Array.isArray(this.state.quotes)
    //   ? quotess[this.state.counter]
    //   : quotess

    return (
      <section className='mainSection'>
        {}
        <div className='quote'>
          <p className='content'>
            <img
              className='speech-marks' alt='speech'
              src='https://static.thenounproject.com/png/333859-200.png'
            />

            {(Array.isArray(this.props.quotes) && this.props.quotes.length >0)
              ? getNinth(this.props.quotes)
              : this.props.quotes.quote}
            <img
              className='speech-marks' alt='close=speech'
              src='https://static.thenounproject.com/png/19278-200.png'
            />
          </p>
          <p className='author'>
            {Array.isArray(this.props.quotes)
              ? 'author'
              : this.props.quotes.author}
          </p>
        </div>
        <div className='row'>
          {Array.isArray(this.props.quotes) && (
            <button className='submitBtn btn btn-primary'> Prev </button>
          )}
          {Array.isArray(this.props.quotes) && (
            <button className='submitBtn btn btn-primary'> Next </button>
          )}
        </div>
      </section>
    )
  }
}
function getNinth(quotes){
  
  return quotes[8].quote
}
export default DisplayQuote
