interface TJob {
  title: string;
  company: string;
  duration: string;
  description: Array<string>;
  location: string;
}

interface TJobListItem {
  label: string;
  designations: Array<TJob>;
}

export interface TJobList extends Array<TJobListItem> {}

interface TSchoolListItem {
  label: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
  cgpa: string | number;
}

export interface TSchoolList extends Array<TSchoolListItem> {}

interface TSkillListItem {
  label: string;
  icon: string;
}

export interface TSkillList extends Array<TSkillListItem> {}
