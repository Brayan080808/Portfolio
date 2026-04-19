import cvEn from "../assets/cv.pdf";
import cvEs from "../assets/cv-es.pdf";
import type { Lang } from "../i18n/portfolioCopy";

type DownloadPDFButtonProps = {
  label?: string;
  lang: Lang;
};

export default function DownloadPDFButton({
  label = "Download CV",
  lang,
}: DownloadPDFButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    if (lang === "es") {
      link.href = cvEs;
      link.download = "cv-es.pdf";
    } else {
      link.href = cvEn;
      link.download = "cv.pdf";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}
