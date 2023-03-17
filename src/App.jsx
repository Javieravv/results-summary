import React, { useState } from 'react'
import { Result } from './components/Result'
import { Summary } from './components/Summary'
import data from './data/data.json'

export const App = () => {
    // Manejamos un estado global para los dos componentes. SE pasan por props
    const [dataSummary, setDataSummary] = useState(
        data.map ( item => {
            item.score = Math.round(Math.random() * 100);
            return item
        } )
    )

    const averageScore = Math.round (dataSummary.reduce ( (sum, item) => {
        return sum + item.score
    }, 0) / 4)


    return (
        <div className='main-container'>
            <Result 
                averageScore = {averageScore}
            />
            <Summary 
                dataSummary={dataSummary}
            />
        </div>
    )
}
