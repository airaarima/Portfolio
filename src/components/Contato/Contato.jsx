import React from 'react'
import styles from './Contato.module.css'
import {getImgPath} from '../../data/utils'

const Contato = () => {
  return (
    <section className={styles.container} id="contato">
        <div className={styles.contentText}>
            <h1 className={styles.title}>Contato</h1>
            <p className={styles.description}>Sinta-se a vontade para entrar em contato comigo!</p>
        </div>
        <div>
            <div className={styles.contentContact}>
                <img src={getImgPath('contact/emailIcon.png')} alt="" />
                <a>arimacoelhoaira@gmail.com</a>
            </div>
            <div className={styles.contentContact}>
                <img src={getImgPath('contact/linkedinIcon.png')} alt="" />
                <a href="https://www.linkedin.com/in/airaarima/">linkedin.com/airaarima</a>
            </div>
            <div className={styles.contentContact}>
                <img src={getImgPath('contact/githubIcon.png')} alt="" />
                <a href="https://github.com/airaarima">github.com/airaarima</a>
            </div>
        </div>
    </section>
  )
}

export default Contato