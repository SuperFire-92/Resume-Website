import { useState } from 'react'
import './App.css'
import TopBar from './TopBar'
import Page from './Page'

function App() {
  const [page, setPage] = useState(0);
  
  
  return (
    <>
      <TopBar setPage={setPage}/>
      <Page page={page}/>
    </>
  )
}

export default App
