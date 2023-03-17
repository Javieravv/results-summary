import React, { useState } from 'react'
import { ItemSumary } from './ItemSumary'


export const Summary = ({ dataSummary }) => {

    return (
        <section className='summary-container'>
            <h2>Summary</h2>
            {
                dataSummary.map ( item => {
                    return <ItemSumary 
                        key={item.category}
                        iconItem = {item.icon}
                        textItem = {item.category}
                        scoreItem = {item.score}
                    />
                })
            }
            <button>
                Continue
            </button>
        </section>
    )
}
