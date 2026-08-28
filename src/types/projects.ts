export interface ProjectPayloadLine {
  keyName: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  progress: number;
  status: string;

  payload: ProjectPayloadLine[];
}