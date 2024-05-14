import './assets/style.css'
import { useState } from 'react'
import { Inputarea, Resultarea } from './components/index';


function App() {

  return (
    <>
      <div>
        <p>（仮）変更前</p>
        <Inputarea className="" />

        <p>結果</p>
        <Resultarea className="" />
      </div>
    </>
  )
}

export default App
