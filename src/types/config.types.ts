interface TCompany {
  label: string;
  href: string;
}

export interface TCompanyRecord extends Record<string, TCompany> {}

interface TJob {
  title: string;
  company: TCompany;
  duration: string;
  description: Array<string>;
  location: string;
  skills: string[];
}

export interface TJobList extends Array<TJob> {}

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
