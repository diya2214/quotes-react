import React, { Component } from 'react'
import Button from './Button'

class Search extends Component {
  setInputRef = input => {
    this.input = input
  }
  submitHandler = e => {
    console.log(this.input.value)
    this.props.getQuotes('https://madiha-quote-app.glitch.me/search?term=life')

    // console.log('in focus')
    e.preventDefault()
  }
  render () {
    return (
      <div className='search container'>
        <div className='page-header'>
          <h4 className='text-left'>Search Quotes</h4>
        </div>
        <div className='row search-wrapper'>
          <div className='col'>
            <form
              onSubmit={this.submitHandler}
              className='form-group search-box'
            >
              <div className='search-row'>
                <input
                  type='text'
                  id='serachTerm'
                  className='form-control'
                  placeholder='write a word'
                  ref={this.setInputRef}
                />
                <Button caption='Search' getQuotes={() => {}} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
