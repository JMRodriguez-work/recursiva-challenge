import { useEffect, useState } from "react";
import { Person, ReportType } from "../definitions";
import { parse } from "csv-parse/browser/esm";

import { Report100Married } from "./report-100-married";
import { ReportSelect } from "./report-select";
import { ReportCommonNamesRiver } from "./report-common-names-river";
import { ReportStadistics } from "./report-stadistics";
import { Button } from "./ui/button";

interface DataTableProps {
  data: string | null;
  reset: () => void;
}

function Report({ data, reset }: DataTableProps) {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reportSelected, setReportSelected] =
    useState<ReportType>("100_MARRIED");

  useEffect(() => {
    setIsLoading(true);
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
          setIsLoading(false);
        }
      );
    }
  }, [data]);

  const totalPeople = people.length;
  const averageAge = Math.ceil(
    people
      .filter((person) => person.team.toLowerCase() === "racing")
      .reduce((acc, person, _, arr) => acc + person.age / arr.length, 0)
  );

  return (
    <div className="mb-10">
      {isLoading ? (
        <div className="w-full grid place-content-center">
          <div className="loader animate-spin"></div>
        </div>
      ) : (
        <div className="bg-[#17181a] max-w-4xl mx-auto border-2 rounded-xl p-10">
          <div className="flex justify-between items-center w-full my-10">
            <div className="flex flex-col gap-2 items-start">
              <Button
                className="rounded text-white bg-blue-800 hover:bg-blue-600"
                onClick={reset}
              >
                Cargar nuevo archivo
              </Button>
              <ReportSelect
                selectedReport={reportSelected}
                onSelectReport={setReportSelected}
              />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p className="text-center">Personas registradas: {totalPeople}</p>
              <p className="text-center">
                Edad promedio en socios de Racing: {averageAge}
              </p>
            </div>
          </div>
          {reportSelected === "100_MARRIED" && (
            <Report100Married data={people} />
          )}
          {reportSelected === "COMMON_NAMES_RIVER" && (
            <ReportCommonNamesRiver data={people} />
          )}
          {reportSelected === "TEAM_STATS" && (
            <ReportStadistics data={people} />
          )}
        </div>
      )}
    </div>
  );
}

export { Report };
