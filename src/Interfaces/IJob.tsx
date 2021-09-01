import IWorkLocations from "./IWorkLocations";
import IOccupations from "./IOccupations";
import IEmployer from "./IEmployer";

interface IJob {
  uuid: string;
  published: string;
  updated: string;
  expires: string;
  workLocations: IWorkLocations[];
  title: string;
  jobtitle?: string;
  description: string;
  sourceurl?: string;
  source: string;
  applicationDue: string;
  occupations: IOccupations[];
  link: string;
  engagementtype?: string;
  extent?: string;
  starttime?: string;
  positioncount?: string;
  sector?: string;
  employer: IEmployer;
}

export default IJob;
