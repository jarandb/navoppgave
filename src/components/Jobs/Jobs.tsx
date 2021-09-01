import { FC } from "react";

// css
import "./Jobs.less";

// components
import Job from "../Job/Job";

import IJob from "../../Interfaces/IJob";

interface IJobsProps {
  jobs: IJob[];
}

const Jobs: FC<IJobsProps> = ({ jobs }: IJobsProps) => {
  return (
    <div className="jobs">
      {jobs.map((jobRaw: IJob, index: number) => {
        return <Job key={jobRaw.uuid} job={jobRaw} />;
      })}
    </div>
  );
};
export default Jobs;
