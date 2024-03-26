import styles from './App.module.css'
import Navbar from './components/Nav/Navbar.jsx'
import Apresentacao from './components/Apresentacao/Apresentacao.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Apresentacao/>
    </div>
  )
}

export default App
