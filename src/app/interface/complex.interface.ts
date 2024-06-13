export enum EStatus {
  APPROVED = "approved",
  DISABLE = "disable",
  ERROR = "error",
}

export interface IComplex {
  id: number;
  name: string;
  status: EStatus;
  date: string;
  progress: number;
}
