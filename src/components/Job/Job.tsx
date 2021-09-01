import { FC } from "react";

// css
import "./Job.less";

// Interface/Types
import IJob from "../../Interfaces/IJob";

// functions
import { diffInDays } from "../../helpers/dates";

interface IJobProps {
  job: IJob;
}

const Job: FC<IJobProps> = ({ job }: IJobProps) => {
  const workplace: string =
    job.workLocations.length > 1
      ? "Flere"
      : `${job.workLocations[0].city}, ${job.workLocations[0].country}`;
  const daysSincePublished: number = diffInDays(job.published, new Date());
  const daysSincePublishedText: string =
    daysSincePublished > 1 ? `For ${daysSincePublished} dager siden` : `I dag`;
  return (
    <a href={job.link} title="les mer om stillingen" className="job">
      <header>
        <h2 className="title">{job.title}</h2>
        <p className="employer">{job.employer.name}</p>
        <p className="workplace">{workplace}</p>
      </header>
      <footer>
        <p className="ad-age">{daysSincePublishedText}</p>
      </footer>
    </a>
  );
};

export default Job;
