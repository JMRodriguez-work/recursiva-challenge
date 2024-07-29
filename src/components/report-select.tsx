import { ReportOptions, ReportType } from "@/definitions";

interface ReportSelectProps {
  selectedReport: ReportType;
  onSelectReport: (report: ReportType) => void;
}

function ReportSelect({ onSelectReport, selectedReport }: ReportSelectProps) {
  return (
    <div className="rounded w-full">
      <select
        value={selectedReport}
        onChange={(e) => onSelectReport(e.target.value as ReportType)}
        className="w-auto bg-gray-800 text-gray-300 border border-gray-600 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.entries(ReportOptions).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ReportSelect };
