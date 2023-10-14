import React from 'react';

const jobsData = [
  {
    id: 1,
    companyName: 'Company A',
    jobPosting: 'Frontend Developer',
    gpaEligibility: '3.0',
    applyLink: 'https://example.com/applyA',
  },
  {
    id: 2,
    companyName: 'Company B',
    jobPosting: 'Backend Developer',
    gpaEligibility: '3.5',
    applyLink: 'https://example.com/applyB',
  },
  {
    id: 3,
    companyName: 'Company C',
    jobPosting: 'Data Analyst',
    gpaEligibility: '3.2',
    applyLink: 'https://example.com/applyC',
  },
  {
    id: 4,
    companyName: 'Company D',
    jobPosting: 'Data Analyst',
    gpaEligibility: '3.2',
    applyLink: 'https://example.com/applyD',
  },
];

const Job = () => {
  return (
    <div>
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-center">Open Job Applications</h1>
      <div className="job-widgets">
        {jobsData.map((job) => (
          <div key={job.id} className="job-widget">
            <div className="widget-content">
              <h3>Company: {job.companyName}</h3>
              <p>Job Posting: {job.jobPosting}</p>
              <p>GPA Eligibility: {job.gpaEligibility}</p>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                <button>Apply</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
