// src/components/Card.jsx
import React from 'react';
import styles from './Card.module.css'; // Importa los estilos como un módulo

export const Card = ({
  title,
  subtitle,
  description,
  author,
  date,
  tags = [],
  imageUrl,
  link = "#",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        {imageUrl && (
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        )}
        <ul className={((author || date || tags.length > 0) ? styles.details : '')}>
          {author && (
            <li className={styles.author}>
              <a href={link}>{author}</a>
            </li>
          )}
          {date && (
            <li className={styles.date}>{date}</li>
          )}
          {tags.length > 0 && (
            <li className={styles.tags}>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>
                    <a href="#">{tag}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.description}>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {description && <p>{description}</p>}
        <p className={styles['read-more']}>
          <a href={link}>Ver más</a>
        </p>
      </div>
    </div>
  );
};
