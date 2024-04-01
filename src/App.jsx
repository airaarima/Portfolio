import styles from './App.module.css'
import Navbar from './components/Nav/Navbar.jsx'
import Apresentacao from './components/Apresentacao/Apresentacao.jsx'
import Sobre from './components/Sobre/Sobre.jsx'
import Tecnologias from './components/Tecnologias/Tecnologias.jsx'
import Contato from './components/Contato/Contato.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Apresentacao/>
      <Sobre/>
      <Tecnologias/>
      <Contato/>
    </div>
  )
}

export default App
