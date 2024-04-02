import React from 'react';
import projetos from '../../data/projetos.json';
import {getImgPath} from '../../utils'
import Card from './Card';
import styles from './Projetos.module.css'

const Projetos = () => {
  return (
    <section id="projetos" className={styles.container}>
      <h2 className={styles.title}>PROJETOS</h2>
      <div className={styles.projetos}>
        {projetos.map((projeto, id) => {
          return <Card key={id} projeto={projeto}/>
        })}
      </div>
    </section>
  );
};

export default Projetos;
