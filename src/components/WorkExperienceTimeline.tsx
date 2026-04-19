import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills?: string[];
}

interface WorkExperienceTimelineProps {
  items: ExperienceItem[];
}

export default function WorkExperienceTimeline({
  items,
}: WorkExperienceTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Línea vertical principal */}
      <div
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 via-gray-600 to-gray-700 md:left-[19px]"
        aria-hidden
      />

      <ul className="space-y-5">
        {items.map((item, index) => (
          <li key={`${item.company}-${item.title}-${index}`} className="relative">
            {/* Nodo en la línea */}
            <div className="absolute left-1 top-6 flex h-8 w-8 items-center justify-center md:top-7">
              <span className="relative z-10 flex h-4 w-4 rounded-full border-2 border-emerald-400 bg-gray-950 shadow-[0_0_12px_rgba(52,211,153,0.35)]" />
            </div>

            <motion.article
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="ml-10 md:ml-14 pb-12 last:pb-0"
            >
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-700">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-emerald-400">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Building2 className="h-4 w-4 shrink-0 opacity-90" />
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {item.company}
                          </a>
                        ) : (
                          item.company
                        )}
                      </span>
                      {item.employmentType && (
                        <>
                          <span className="text-gray-600">·</span>
                          <span className="text-sm text-gray-400">
                            {item.employmentType}
                          </span>
                        </>
                      )}
                    </p>
                    {item.location && (
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {item.location}
                      </p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm text-gray-400 sm:text-right">
                    {item.startDate} — {item.endDate}
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-400 marker:text-emerald-500/60">
                  {item.description.map((line, i) => (
                    <li key={i} className="leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>

                {item.skills && item.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          </li>
        ))}
      </ul>
    </div>
  );
}
