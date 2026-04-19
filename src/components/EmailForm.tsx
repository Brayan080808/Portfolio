import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Spiner from "./Spiner";
import SuccessNotification from "./SuccessNotification";
import ErrorNotification from "./ErrorNotification";
import { portfolioCopy } from "../i18n/portfolioCopy";

type ContactCopy = (typeof portfolioCopy)["en"]["contact"];

export type EmailFormProps = {
  contactCopy: ContactCopy;
  contactEmail: string;
  phoneDisplay: string;
  locationDisplay: string;
};

const EmailForm = ({
  contactCopy,
  contactEmail,
  phoneDisplay,
  locationDisplay,
}: EmailFormProps) => {
    const [to, setTo] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [isError,setIsError] = useState<boolean>(false);
    const [isSucess,setIsSucess] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)

        e.preventDefault();

        const templateParams = {
            to_email: to,
            subject: subject,
            message: message,
        };

        emailjs.send('service_9qmfrib', 'template_bdfwlzd', templateParams, 'Hqsub6P4NuqvTjep2')
        .then(()=>{
          setTo("")
          setSubject("")
          setMessage("")
          setIsSucess(true);
        })
        .catch(()=>{

          setIsError(true);
        })
        .finally(()=>{
          setIsLoading(false);
        })
    };


    return (
        <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {contactCopy.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 relative p-5">
            <div>
              <p className="text-gray-400 mb-6">{contactCopy.intro}</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                  <a
                    href={`mailto:${contactEmail}`}
                    className="hover:text-emerald-400"
                  >
                    {contactEmail}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                  <a
                    href="tel:+5358683048"
                    className="hover:text-emerald-400"
                  >
                    {phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{locationDisplay}</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Brayan080808"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bryan-ayala-acosta-862891238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/5358683048"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <SiWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>

            {isLoading && (
                  <div className=' flex justify-center items-center w-full h-full bg-white bg-opacity-10 absolute z-20 text-green-400'>
                    <Spiner />
                  </div>
            )}


            <form className={`space-y-4 relative z-10  ${isLoading && "pointer-events-none"} `} onSubmit={sendEmail}>
              <input
                type="email"
                placeholder={contactCopy.emailPlaceholder}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={contactCopy.subjectPlaceholder}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                placeholder={contactCopy.messagePlaceholder}
                rows={4}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
              >
                {contactCopy.send}
              </button>
            </form>
          </div>
        </div>

        {isSucess && (
          <SuccessNotification setIsSucess={setIsSucess} />
        )}

        {isError && (
            <ErrorNotification setIsError={setIsError} />
        )}

      </section>
    );
};

export default EmailForm;