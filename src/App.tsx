import { useState } from "react";
import { Header } from "./components/header";
import { UploadFile } from "./components/upload-file";
import { DataTable } from "./components/data-table";

function App() {
  const [fileData, setFileData] = useState<string | null>(null);
  return (
    <div className="min-h-[100dvh] px-10 bg-[#17181a] text-white grid grid-rows-[auto_1fr]">
      <Header />
      <main className="flex flex-col justify-center h-full w-full">
        {fileData ? (
          <DataTable data={fileData} />
        ) : (
          <UploadFile setFileData={setFileData} />
        )}
      </main>
    </div>
  );
}

export default App;
