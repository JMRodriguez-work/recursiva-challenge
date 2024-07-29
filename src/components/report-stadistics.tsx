import { Person } from "../definitions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface ReportTeamStatsProps {
  data: Person[];
}

export function ReportStadistics({ data }: ReportTeamStatsProps) {
  const teamStats = data.reduce((acc, person) => {
    if (!acc[person.team]) {
      acc[person.team] = { total: 0, ageSum: 0, minAge: Infinity, maxAge: 0 };
    }
    acc[person.team].total += 1;
    acc[person.team].ageSum += person.age;
    acc[person.team].minAge = Math.min(acc[person.team].minAge, person.age);
    acc[person.team].maxAge = Math.max(acc[person.team].maxAge, person.age);
    return acc;
  }, {} as Record<string, { total: number; ageSum: number; minAge: number; maxAge: number }>);

  const teamStatsArray = Object.entries(teamStats)
    .map(([team, stats]) => ({
      team,
      averageAge: Math.ceil(stats.ageSum / stats.total),
      minAge: stats.minAge,
      maxAge: stats.maxAge,
      total: stats.total,
    }))
    .sort((a, b) => b.total - a.total);

  return (
    <Table className="mb-2">
      <TableCaption>Estadísticas de equipos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Equipo</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Promedio de Edad</TableHead>
          <TableHead>Edad Mínima</TableHead>
          <TableHead>Edad Máxima</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamStatsArray.map((stats, index) => (
          <TableRow key={index}>
            <TableCell>{stats.team}</TableCell>
            <TableCell>{stats.total}</TableCell>
            <TableCell>{stats.averageAge}</TableCell>
            <TableCell>{stats.minAge}</TableCell>
            <TableCell>{stats.maxAge}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
