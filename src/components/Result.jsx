import React from 'react'

export const Result = () => {
  return (
    <section className='result-container'>
        <h4>Your Result</h4>
        <div className='porcent-result'>
            <p>76</p>
            <p>of 100</p>
        </div>
        <h3>Great</h3>
        <p className='message-score'>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}
