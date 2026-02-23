export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  image: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  category: string;
  status: 'Published' | 'Draft' | 'Under Review';
}

export enum ResearchToolMode {
  BRAINSTORM = 'BRAINSTORM',
  SUMMARIZE = 'SUMMARIZE',
  PROOFREAD = 'PROOFREAD'
}