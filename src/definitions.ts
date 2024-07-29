export interface Person {
  name: string;
  age: number;
  team: string;
  maritalStatus: string;
  educationLevel: string;
}

export type ReportType = "100_MARRIED" | "COMMON_NAMES_RIVER" | "TEAM_STATS";

export enum ReportOptions {
  "100_MARRIED" = "100 primeras personas casadas con estudios universitarios",
  "COMMON_NAMES_RIVER" = "5 nombres más comunes entre hinchas de River",
  "TEAM_STATS" = "Estadísticas de equipos"
}