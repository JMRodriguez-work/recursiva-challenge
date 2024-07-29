import { useEffect, useState } from "react";
import { Person } from "../definitions";
import { parse } from "csv-parse/browser/esm";
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

interface DataTableProps {
  data: string | null;
}

const PAGE_SIZE = 20;

function DataTable({ data }: DataTableProps) {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    if (data) {
      parse(
        data,
        {
          delimiter: ";",
          columns: ["name", "age", "team", "maritalStatus", "educationLevel"],
          cast: (value, context) => {
            if (context.column === "age") {
              return Number(value);
            }
            return value;
          },
        },
        (err, output) => {
          if (err) {
            console.error(err);
            return;
          }
          setPeople(output);
        }
      );
    }
  }, [data]);

  const totalPeople = people.length;
  const totalPages = Math.ceil(people.length / PAGE_SIZE);
  const currentData = people.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  return (
    <div className="mb-10">
      {currentData.length > 0 && (
        <div className="max-w-2xl mx-auto border rounded-lg px-4">
          <h1>Resultados: {totalPeople}</h1>
          <Table className="w-fit mx-auto">
            <TableCaption>Listado de personas registradas</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Edad</TableHead>
                <TableHead>Equipo</TableHead>
                <TableHead>Estado Civil</TableHead>
                <TableHead>Nivel de Estudios</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((person, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell>{person.age}</TableCell>
                  <TableCell>{person.team}</TableCell>
                  <TableCell>{person.maritalStatus}</TableCell>
                  <TableCell>{person.educationLevel}</TableCell>
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
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export { DataTable };
