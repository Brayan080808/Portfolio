import { X,XCircle } from "lucide-react"
import { useEffect } from "react";

interface ErrorNotification{
    setIsError: (error:boolean) => void
}


export default function ErrorNotification({setIsError}:ErrorNotification){
    const duration = 5000;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsError(false)
        },  duration)
    
        return () => clearTimeout(timer)
      }, [duration])

      
    return(
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center p-4 z-50">
        <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
          <XCircle size={24} className="mr-3" />
          <span className="font-medium">Error al mandar el email. Por favor, inténtalo de nuevo.</span>
          <button
            onClick={() => setIsError(false)}
            className="ml-4 text-white hover:text-red-200 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>
      </div>

    )
}