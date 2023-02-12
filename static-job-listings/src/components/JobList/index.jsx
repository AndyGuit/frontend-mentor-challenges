import React, { useState } from 'react';
import JobListItem from '../JobListItem';

import data from '../../data.json';

import styles from './JobList.module.scss';
import JobFilters from '../JobFilters';

const JobList = () => {
  const [filters, setFilters] = useState([]);

  const addFilter = filter => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = filter => {
    const i = filters.indexOf(filter);
    const arr1 = filters.slice(0, i);
    const arr2 = filters.slice(i + 1, filters.length);

    setFilters([...arr1, ...arr2]);
  };
  // const filters = data.map(job => [
  //   job.role,
  //   job.level,
  //   ...job.languages,
  //   ...job.tools,
  // ]);
  return (
    <div className={styles.JobListBlock}>
      <ul className="job-list">
        <JobFilters removeFilter={removeFilter} filters={filters} />
        {data.map(job => (
          <JobListItem addFilter={addFilter} key={job.id} {...job} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
