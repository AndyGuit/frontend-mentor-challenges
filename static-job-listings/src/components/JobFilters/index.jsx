import React from 'react';

import styles from './JobFilters.module.scss';

const JobFilters = ({ filters, removeFilter, setFilters }) => {
  if (!filters.length) return;

  return (
    <div className={styles.wrapper}>
      <div>
        {filters.map((filter, i) => {
          return (
            <span key={i} className={styles.filterElement}>
              {filter}
              <button onClick={() => removeFilter(filter)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </button>
            </span>
          );
        })}
        <button onClick={() => setFilters([])} className={styles.clearBtn}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default JobFilters;
