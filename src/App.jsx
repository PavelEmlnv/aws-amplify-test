import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [login, handleLogin] = useState('')
  const [password, handlePassword] = useState('')

  const handleLoginChange = event => handleLogin(event.target.value)

  const handlePasswordChange = event => handlePassword(event.target.value)

  const handleClick = () => {
    if (login.length > 0 && password.length > 0) {
      console.log("call")
    }
  }

  return (
    <div className="App">
      <input type="text" placeholder="Login" value={login} onChange={handleLoginChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default App
