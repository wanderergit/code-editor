import React from 'react'
import FileExplorer from './FileExplorer'

function Main() {
  return (
    <div>
      <header className="App-header">
        <img id="logo" src="https://www.dyte.io/images/Dyte-Logo.svg" alt="logo" />
      </header>
      <FileExplorer />
    </div>
  )
}

export default Main;
