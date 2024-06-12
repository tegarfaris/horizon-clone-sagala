export enum ETech {
  MAC = "mac-os",
  ANDROID = "android",
  WINDOWS = "windows",
}
export interface IDevelopmentTable {
  id: number;
  name: string;
  tech: ETech[];
  date: string;
  progress: number;
}
