import React from 'react'
import Clock from './Clock'
const Heading = () => {
  return (
    <div>
      <header className='App-header row'>
        <img
          alt='My Quotes'
          src='https://lh3.googleusercontent.com/-p8aN3ZKBZu0/WsIKtw0UdNI/AAAAAAAACEA/UQ0KH87YZV0VCmGWaH6f1xIU9Uj20OY-ACEwYBhgL/w140-h140-p/f354e621-ef34-44c5-ba00-430964dff3d7'
          className='App-logo'
        />{' '}
        <h2> Merlin Wisdom Generator</h2>
        <Clock />
      </header>
    </div>
  )
}
export default Heading
