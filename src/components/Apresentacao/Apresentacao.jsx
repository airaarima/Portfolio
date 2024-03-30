import React from 'react'
import {getImgPath} from '../../data/utils'
import styles from '../Apresentacao/Apresentacao.module.css'

const Apresentacao = () => {
  return (
    <section className={styles.container} id="inicio">
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, World!</h1>
            <p className={styles.description}>Eu sou a Aira, desenvolvedora fullstack.</p>
            <a href="#contato" className={styles.contatoBtn}>Entrar em contato</a>
        </div>
        <img src={getImgPath("hero/heroImage.png")} alt="" className={styles.pessoalImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Apresentacao