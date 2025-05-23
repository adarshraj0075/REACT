import { useState } from 'react'
import './App.css'
import { DataComponent } from './components/DataComponent'
import { DataProvider } from './context/DataProvider'

function App() {
 

  return (
    <>
    <DataProvider>
    <DataComponent/>
    </DataProvider>
    </>
  )
}

export default App
