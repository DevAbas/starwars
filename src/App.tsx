import { Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import CharacterDetails from 'pages/CharacterDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters/:characterId' element={<CharacterDetails />} />
      </Routes>
    </>
  )
}

export default App
