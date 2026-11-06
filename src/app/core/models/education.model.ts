export type EducationType = 'graduacao' | 'tecnico' | 'certificacao';

export interface Education {
  institution: string;
  course: string;
  type: EducationType;
  startYear: number;
  endYear: number | null;
}
