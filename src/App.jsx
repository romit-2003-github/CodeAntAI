import './App.css'
import {Routes, Route} from 'react-router-dom';
import Repository from './Pages/Repository'
import SignIn from './Pages/SignIn';
function App() {
  return (
    <>
      {/* <h1>This is App.jsx file</h1> */}
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/repos" element={<Repository/>} />
      </Routes>
    </>
  )
}

export default App
