import cv from '../assets/cv.pdf'


export default function DownloadPDFButton(){
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv; // Ruta al archivo PDF en la carpeta public
    link.download = "Bryan Alain Ayala Acosta"; // Nombre con el que se descargará el archivo
    document.body.appendChild(link);
    link.click(); // Simula el clic en el enlace
    document.body.removeChild(link); // Elimina el enlace del DOM
  };

  return (
    <button onClick={handleDownload} className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 font-bold py-2 px-4 rounded">
        Download CV
    </button>
  );
};
