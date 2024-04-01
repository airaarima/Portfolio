import React from 'react'
import styles from '../Sobre/Sobre.module.css'
import {getImgPath} from '../../utils'

const Sobre = () => {
  return (
    <section className={styles.container} id="sobre">
        <h2 className={styles.title}>SOBRE</h2>
        <div className={styles.content}>
            <img src={getImgPath('about/aboutImage.png')} alt="" className={styles.aboutImg}/>
            <ul className={styles.aboutItens}>
                <li className={styles.aboutItem}>Iniciei meus estudos na área em 2023 e desde então tenho me encantado cada vez mais em aprender a lógica e estrutura de dados por trás de cada sistema.</li>
                <li className={styles.aboutItem}>No momento, estou tendo a oportunidade de aprofundar meu conhecimento e aprimorar minhas habilidades com uma graduação em Engenharia de Software, na Universidade Federal do Pampa (Unipampa).</li>
                <li className={styles.aboutItem}>Curiosidade: cursei 6 perídos da graduação em Serviço Social até me encontrar na área de Tecnologia. Portanto, gosto de me envolver em projetos que contribuam e sejam socialmente relevantes.</li>
            </ul>
        </div>
    </section>
  )
}

export default Sobre