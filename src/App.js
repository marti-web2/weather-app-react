import React from "react"
import UilReact from '@iconscout/react-unicons/icons/uil-react'

import './App.css'
import TopButtons from "./components/TopButtons.jsx"
import Inputs from "./components/Inputs.jsx"

const App = () => {
  
    return (
     <div className=
     "mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
     </div>
    )
  
}

export default App