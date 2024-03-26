import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImgPath} from '../../utils'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href="#inicio" className={styles.title}>Aira Arima</a>
        <div className={styles.menu}>
          <img className={styles.menuBtn} src={menuOpen ? getImgPath("nav/closeIcon.png") : getImgPath("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItens} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#sobre" className={styles.menuItem}>Sobre</a></li>
                <li><a href="#tecnologias" className={styles.menuItem}>Tecnologias</a></li>
                <li><a href="#projetos" className={styles.menuItem}>Projetos</a></li>
                <li><a href="#contato" className={styles.menuItem}>Contato</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar