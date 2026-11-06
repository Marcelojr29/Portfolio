export type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export interface TechnologyGroup {
  category: TechnologyCategory;
  label: string;
  items: string[];
}
