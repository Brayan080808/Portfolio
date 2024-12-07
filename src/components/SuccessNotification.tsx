import { CheckCircle, X } from 'lucide-react'
import {  useEffect } from 'react'

interface SuccessNotificationProps {
  setIsSucess: (success:boolean) => void;
}

export default function SuccessNotification({ 
  setIsSucess
}: SuccessNotificationProps) {
  const message = "¡Éxito! El email se ha enviado correctamente.";
  const duration = 5000 ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSucess(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])


  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center p-4 z-50">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
        <CheckCircle size={24} className="mr-3" />
        <span className="font-medium">{message}</span>
        <button
          onClick={() => setIsSucess(false)}
          className="ml-4 text-white hover:text-green-200 focus:outline-none"
          aria-label="Cerrar notificación"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
