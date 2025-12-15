export interface AuditPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  color: 'white' | 'yellow' | 'pink' | 'green' | 'blue' | 'purple';
}

export interface RoastResponse {
  critique: string[];
  score: number;
  fix: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  ANALYZING = 'ANALYZING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}