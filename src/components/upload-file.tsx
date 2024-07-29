import { ChangeEvent, FormEvent, useState } from "react";
import { UploadFileIcon } from "./upload-file-icon";

interface UploadFileProps {
  setFileData: (data: string) => void;
}

function UploadFile({ setFileData }: UploadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if(selectedFile) {
      const fileText = await selectedFile.text();
      setFileData(fileText);
    }
  };
  return (
    <div className="px-4 h-96 w-72 bg-white text-black rounded-xl shadow-md">
      <form className="h-full pb-10" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center h-full">
          <label
            className="flex cursor-pointer items-center gap-2 pt-10"
            htmlFor="upload"
          >
            <UploadFileIcon />
            <div className="flex flex-col">
              <h2 className="text-xl">Añade tus archivos</h2>
              <span className="text-sm text-[#676767] underline hover:text-blue-500">
                O selecciona una carpeta
              </span>
            </div>
            <input
              type="file"
              name="upload"
              id="upload"
              accept=".csv"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {selectedFile && (
            <div className="mt-4 pt-10 border-t text-center">
              <p className="font-semibold flex flex-col">
                Archivo seleccionado: <span>{selectedFile.name}</span>
              </p>
            </div>
          )}
          <button
            type="submit"
            className={`mt-auto px-10 py-2 rounded-full ${
              selectedFile
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedFile}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export { UploadFile };
