interface TJob {
  title: string;
  company: string;
  duration: string;
  description: Array<string>;
  location: string;
  skills: string[];
}

interface TJobListItem {
  label: string;
  designations: Array<TJob>;
  href: string;
}

export interface TJobList extends Array<TJobListItem> {}

interface TSchoolListItem {
  label: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
  cgpa?: string | number;
}

export interface TSchoolList extends Array<TSchoolListItem> {}

interface TSkill {
  label: string;
  icon: string;
  percent: number;
}

interface TSkillListItem {
  label: string;
  skills: Array<TSkill>;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface TSkillList extends Array<TSkillListItem> {}
