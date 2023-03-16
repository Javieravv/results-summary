import React from 'react'
import { Result } from './components/Result'
import { Summary } from './components/Summary'

export const App = () => {
    return (
        <div className='main-container'>
            <Result />
            <Summary />
        </div>
    )
}
