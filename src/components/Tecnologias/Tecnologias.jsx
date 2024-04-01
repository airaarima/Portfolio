import React from "react";
import tecnologias from "../../data/tecnologias.json";
import { getImgPath } from "../../utils";
import styles from './Tecnologias.module.css'

const Tecnologias = () => {
  return (
    <section id="tecnologias" className={styles.container}>
      <h2 className={styles.title}>HARD SKILLS</h2>
      <div className={styles.content}>
        {tecnologias.map((tecnologia, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImg}><img src={getImgPath(tecnologia.imageSrc)} alt={tecnologia.title}/></div>
              <p>{tecnologia.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tecnologias;
