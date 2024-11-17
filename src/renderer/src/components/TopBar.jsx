import React from 'react'

export default function TopBar() {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div>
      <div className="bg-blue-400 w-screen h-5" style={{ WebkitAppRegion: 'drag' }}></div>
      <div className="bg-blue-400 w-screen h-3"></div>
      <div id="control-buttons" className="absolute top-1 right-0 pe-2">
        <button id="minimize" onClick={handleMinimize}>
          &#128469;
        </button>
        <button id="close" onClick={handleClose}>
          &#x2715;
        </button>
      </div>
    </div>
  )
}
