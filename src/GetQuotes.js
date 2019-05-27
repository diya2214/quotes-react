getQuotes = props => {
  fetch(props.serverPath)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res
      } else {
        throw new Error('HTTP error')
      }
    })
    .then(res => res.json())
    .then(quote => {
      console.log(quote)
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
