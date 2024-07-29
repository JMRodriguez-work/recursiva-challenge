import { Person } from "@/definitions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { useState } from "react";

interface ReportTableProps {
  data: Person[];
}

const PAGE_SIZE = 20;

function Report100Married({ data }: ReportTableProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const marriedWithUniversity = data
    .filter(
      (person) =>
        person.maritalStatus === "Casado" &&
        person.educationLevel === "Universitario"
    )
    .slice(0, 100)
    .sort((a, b) => a.age - b.age)

  const totalPages = Math.ceil(marriedWithUniversity.length / PAGE_SIZE);
  const currentData = marriedWithUniversity.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  return (
    <>
      <Table className="w-fit mx-auto">
        <TableCaption>
          100 primeras personas casadas con estudios universitarios
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Edad</TableHead>
            <TableHead>Equipo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((person, index) => (
            <TableRow key={index}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.age}</TableCell>
              <TableCell>{person.team}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="ml-auto flex items-center justify-end space-x-2 py-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          variant="outline"
          size="sm"
          className="rounded-xl"
        >
          Anterior
        </Button>
        <span>{`Página ${currentPage + 1} de ${totalPages}`}</span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={currentPage >= totalPages - 1}
          variant="outline"
          size="sm"
          className="rounded-xl"
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}

export { Report100Married };
