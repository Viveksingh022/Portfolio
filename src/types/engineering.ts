export interface EngineeringMetric {
  label: string;
  value: string;
}

export interface EngineeringProject {
  id: string;
  title: string;
  fileName: string;
  status: string;
  accent: string;
  json: string;
  metrics: EngineeringMetric[];
}