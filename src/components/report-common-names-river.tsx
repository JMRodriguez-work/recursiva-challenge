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

interface ReportCommonNamesRiverProps {
  data: Person[];
}

export function ReportCommonNamesRiver({
  data,
}: ReportCommonNamesRiverProps) {
  const commonNamesRiver = data
    .filter((person) => person.team === "River")
    .map((person) => person.name)
    .reduce((acc, name) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const commonNamesRiverTop5 = Object.entries(commonNamesRiver)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name]) => name);

  return (
    <Table className="mb-2">
      <TableCaption>5 nombres más comunes entre hinchas de River</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {commonNamesRiverTop5.map((name, index) => (
          <TableRow key={index}>
            <TableCell>{name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
