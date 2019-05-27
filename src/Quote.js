import React, { Component } from 'react'
import Button from './Button.js'
import Search from './Search.js'
import DisplayQuotes from './DisplayQuotes.js'

const serverPathDefault = 'https://madiha-quote-app.glitch.me/quotes/random'
class Quote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Quote: [],
      error: null,
      isLoading: true,
      counter: 0
    }
  }

  getQuotes = fetchUrl => {
    // console.log(e.target.value)
    // let props = this.state.serverPath

    // console.log(fetchUrl)
    fetch(fetchUrl || serverPathDefault)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res
        } else {
          throw new Error('HTTP error')
        }
      })
      .then(res => res.json())
      .then(quote => {
        this.setState({
          isLoading: false,
          Quote: quote
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: error
        })
      })
  }
  componentDidMount () {
    this.getQuotes()
  }
  render () {
    return (
      <main className='container'>
        <Search getQuotes={this.getQuotes} />
        <DisplayQuotes quotes={this.state.Quote} />

        <Button getQuotes={this.getQuotes} caption='Get Wisdom' />
      </main>
    )
  }
}
export default Quote
