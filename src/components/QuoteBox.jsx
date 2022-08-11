import React from 'react'

const QuoteBox = ({randomUser, randomColors, getRandomAll}) => {

  const objectStyle = {
    color: randomColors
  }
  
  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <header className='card_up'>
      <i className='card_icon fa-solid fa-quote-left'></i> 
      <h1 className='card_quote'>{`${randomUser.quote}`}</h1>
      </header>
      <div className='card_down'>
      <h2 className='card_author'>{`${randomUser.author}`}</h2>
      <button onClick={getRandomAll} className='card_btn' style={objectBgStyle}>&#62;</button>
      </div>
    </article>
  )
}

export default QuoteBox



