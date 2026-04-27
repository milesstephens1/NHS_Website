import { Document, Page } from "react-pdf";
import { useState } from "react";

const PDFViewer = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(err) => console.error("PDF load error:", err)}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page key={i} pageNumber={i + 1} width={340} />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
