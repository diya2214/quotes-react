import React from 'react'
const Button = props => {
  // console.log(props)
  return (
    <section>
      <button
        className='submitBtn btn btn-primary'
        onClick={e => props.getQuotes()}
      >
        {props.caption}
      </button>
    </section>
  )
}
export default Button
