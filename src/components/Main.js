import React from 'react'
import FileExplorer from './FileExplorer'
import LiveView from './LiveView'

function Main() {
  return (
    <div>
      <header className="App-header">
        <img id="logo" src="https://www.dyte.io/images/Dyte-Logo.svg" />
      </header>
      <FileExplorer />
      {/* // <LiveView /> */}
    </div>
  )
}

export default Main;
