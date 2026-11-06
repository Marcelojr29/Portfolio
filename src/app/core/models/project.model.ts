export interface ProjectDetail {
  context: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  detail: ProjectDetail;
  technologies: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
  order: number;
}
