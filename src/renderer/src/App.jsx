import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TopBar from './components/TopBar'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TopBar></TopBar>
      <h1 className="text-red-500 text-lg">Hello Electron!</h1>
    </>
  )
}

export default App
