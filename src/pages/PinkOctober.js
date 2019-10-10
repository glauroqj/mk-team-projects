import React, { useState } from 'react'
/** components */
import Loading from '../components/Loading'
/** theme */
import '../assets/css/themes/pink-october.scss'


const PinkOctober = () => {
  const [state, setState] = useState({
    loading: true
  })

  if (state.loading) return <Loading text='Carregando...' />

  return (
    <div className="pink-october">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default PinkOctober
