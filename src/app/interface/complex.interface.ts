export enum EStatus {
  APPROVED = "approved",
  DISABLE = "disable",
  ERROR = "error",
}

export interface IComplex {
  id: string;
  name: string;
  status: EStatus;
  date: string;
  progress: number;
}
