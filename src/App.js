import logo from './logo.svg'
import './App.css'
import Facebook from "./components/Facebook"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Facebook Auth Example</h1>
        </p>
        <Facebook />
      </header>
    </div>
  )
}

export default App
