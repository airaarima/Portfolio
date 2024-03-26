import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImgPath} from '../../utils'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Aira Arima</a>
        <div className={styles.menu}>
          <img className={styles.menuBtn} src={menuOpen ? getImgPath("nav/closeIcon.png") : getImgPath("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItens} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li href="#sobre">Sobre</li>
                <li href="#tecnologias">Tecnologias</li>
                <li href="#projetos">Projetos</li>
                <li href="#contato">Contato</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar