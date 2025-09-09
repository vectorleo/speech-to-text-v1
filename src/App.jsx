import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpeechToText from './SpeechToText'
import Footer from './Footer'


function App() {


  return(
    <div className="flex flex-col min-h-screen">
      <SpeechToText />
      <Footer/>
    </div>
  )
}

export default App;
