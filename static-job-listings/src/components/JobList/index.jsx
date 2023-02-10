import React from 'react';
import JobListItem from '../JobListItem';

import data from '../../data.json';

import styles from './JobList.module.scss';

const JobList = () => {
  const filters = data.map(job => [
    job.role,
    job.level,
    ...job.languages,
    ...job.tools,
  ]);
  return (
    <div className={styles.JobListBlock}>
      <ul>
        {data.map(job => (
          <JobListItem key={job.id} {...job} />
        ))}
        {/* <JobListItem {...data[0]} /> */}
      </ul>
    </div>
  );
};

export default JobList;
