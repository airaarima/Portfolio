import styles from './App.module.css'
import Navbar from './components/Nav/Navbar.jsx'
import Apresentacao from './components/Apresentacao/Apresentacao.jsx'
import Sobre from './components/Sobre/Sobre.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Apresentacao/>
      <Sobre/>
    </div>
  )
}

export default App
