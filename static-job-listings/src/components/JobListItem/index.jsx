import React from 'react';

import styles from './JobListItem.module.scss';

const JobListItem = props => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props;
  const isNew = props.new;

  return (
    <li className={`${styles.jobItem} ${featured ? styles.jobFeatured : ''}`}>
      <div className={styles.img}>
        <img src={logo} alt="img" />
      </div>
      <div className={styles.desc}>
        <div className={styles.descTop}>
          <h3>{company}</h3>
          {isNew && (
            <span className={`${styles.label} ${styles.labelNew}`}>new!</span>
          )}
          {featured && (
            <span className={`${styles.label} ${styles.labelFeatured}`}>
              featured
            </span>
          )}
        </div>
        <div className={styles.descMid}>
          <h2>{position}</h2>
        </div>
        <div className={styles.descBottom}>
          <span>{postedAt}</span>
          <span className={styles.divider}></span>
          <span>{contract}</span>
          <span className={styles.divider}></span> {/* &#183; */}
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.filters}>
        {[role, level, ...languages, ...tools].map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </div>
    </li>
  );
};

export default JobListItem;
