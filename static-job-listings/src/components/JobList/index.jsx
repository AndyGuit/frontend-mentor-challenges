import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobListItem from '../JobListItem';

import data from '../../data.json';

import styles from './JobList.module.scss';
import JobFilters from '../JobFilters';

const JobList = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([...data]);

  useEffect(() => {
    const urlFilters = window.location.search;
    if (urlFilters) {
      const savedFilters = urlFilters
        .substring(urlFilters.indexOf('=') + 1)
        .split(',');
      setFilters(savedFilters);
    }
  }, []);

  useEffect(() => {
    if (!filters.length) {
      setFilteredData([...data]);
    } else {
      filterData();
    }
    addFilterParams();
  }, [filters]);

  const addFilterParams = () => {
    if (!filters.length) {
      navigate('');
      return;
    }

    const queryString = '?filters=' + filters.join(',');
    navigate(queryString);
  };

  const filterData = () => {
    const filtered = filteredData.filter(job => {
      const items = [job.role, job.level, ...job.languages, ...job.tools];

      return filters.every(filter => items.includes(filter));
    });

    setFilteredData(filtered);
  };

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

  return (
    <div className={styles.JobListBlock}>
      <ul className="job-list">
        <JobFilters removeFilter={removeFilter} filters={filters} />
        {filteredData.map(job => (
          <JobListItem addFilter={addFilter} key={job.id} {...job} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
