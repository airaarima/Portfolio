import React from "react";
import {getImgPath} from '../../utils'
import styles from './Card.module.css'

const Card = ({projeto : {title,imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImgPath(imageSrc)}
        alt={`Imagem do projeto ${title}`}
        className={styles.img}
      />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li key={id} className={styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" className={styles.link}>Deploy</a>
        <a href={source} target="_blank" className={styles.link}>Repositório</a>
      </div>
    </div>
  );
};

export default Card;
