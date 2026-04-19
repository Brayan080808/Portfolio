import { motion } from "framer-motion";

/**
 * Satélite tipo ilustración flat (paneles anchos, fuselaje, antena parabólica)
 * con animación suave de flotación.
 */
function GifStyleSatellite() {
  return (
    <motion.div
      className="relative origin-center"
      animate={{
        y: [0, -12, 0],
        rotate: [-2.5, 3, -2.5],
      }}
      transition={{
        duration: 4.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 160 100"
        className="h-48 w-[17rem] drop-shadow-[0_12px_36px_rgba(52,211,153,0.4)] sm:h-56 sm:w-[20rem] lg:h-64 lg:w-[23rem]"
        aria-hidden
      >
        <defs>
          <linearGradient id="sat-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="55%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
          <linearGradient id="sat-panel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* Panel solar izquierdo */}
        <rect
          x="2"
          y="32"
          width="44"
          height="36"
          rx="5"
          fill="url(#sat-panel)"
          stroke="#34d399"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <g stroke="#64748b" strokeWidth="0.6" opacity="0.7">
          <line x1="8" y1="38" x2="40" y2="38" />
          <line x1="8" y1="46" x2="40" y2="46" />
          <line x1="8" y1="54" x2="40" y2="54" />
          <line x1="8" y1="62" x2="40" y2="62" />
        </g>

        {/* Fuselaje */}
        <rect
          x="54"
          y="28"
          width="52"
          height="44"
          rx="12"
          fill="url(#sat-body)"
        />
        <rect
          x="64"
          y="36"
          width="32"
          height="14"
          rx="3"
          fill="rgb(15 23 42)"
          opacity="0.45"
        />

        {/* Panel solar derecho */}
        <rect
          x="114"
          y="32"
          width="44"
          height="36"
          rx="5"
          fill="url(#sat-panel)"
          stroke="#34d399"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <g stroke="#64748b" strokeWidth="0.6" opacity="0.7">
          <line x1="120" y1="38" x2="152" y2="38" />
          <line x1="120" y1="46" x2="152" y2="46" />
          <line x1="120" y1="54" x2="152" y2="54" />
          <line x1="120" y1="62" x2="152" y2="62" />
        </g>

        {/* Antena */}
        <line
          x1="80"
          y1="28"
          x2="80"
          y2="10"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse
          cx="80"
          cy="9"
          rx="9"
          ry="5"
          fill="#475569"
          stroke="#6ee7b7"
          strokeOpacity="0.6"
          strokeWidth="1"
        />

        {/* Luz de estado */}
        <motion.circle
          cx="120"
          cy="42"
          r="3"
          fill="#34d399"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

export default function Satelite() {
  return (
    <div className="absolute right-10 z-0 mb-24 hidden h-[470px] w-[min(520px,48vw)] max-w-[92vw] overflow-visible lg:block">
      <div className="relative mx-auto h-full w-full max-w-[500px]">
        {/* <img
          src={gif3}
          alt="Developer illustration"
          width={500}
          height={500}
          className="relative z-0 h-full w-full object-contain object-right"
        /> */}

        {/* Satélite “tipo gif”: flota encima de la zona superior de la ilustración */}
        <div className="pointer-events-none absolute left-[6%] top-[4%] z-10 sm:left-[10%] sm:top-[6%]">
          <GifStyleSatellite />
        </div>
      </div>
    </div>
  );
}

// import { motion } from "framer-motion";

// /** Escena hero: espacio + órbitas tech (sin imagen externa). */
// export default function Satelite() {
//   const stars = [
//     12, 28, 44, 61, 73, 88, 15, 91, 33, 67, 52, 39, 77, 22, 58, 84, 7, 95, 48,
//     62, 19, 71, 41, 56, 3, 89, 26, 64,
//   ];

//   return (
//     <div
//       className="relative hidden h-[470px] w-[min(420px,42vw)] shrink-0 select-none items-center justify-center overflow-visible lg:flex"
//       aria-hidden
//     >
//       {/* Brillo de fondo tipo nebulosa */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//         <div className="h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
//         <div className="absolute h-48 w-48 rounded-full bg-teal-500/15 blur-2xl" />
//       </div>

//       {/* Campo de estrellas */}
//       <div className="absolute inset-4 rounded-full">
//         {stars.map((left, i) => {
//           const top = (i * 37 + 13) % 100;
//           const size = 1 + (i % 3);
//           const delay = (i * 0.35) % 3;
//           return (
//             <motion.span
//               key={i}
//               className="absolute rounded-full bg-white"
//               style={{
//                 left: `${left}%`,
//                 top: `${top}%`,
//                 width: size,
//                 height: size,
//               }}
//               animate={{ opacity: [0.15, 1, 0.15] }}
//               transition={{
//                 duration: 2 + (i % 4) * 0.4,
//                 repeat: Infinity,
//                 delay,
//                 ease: "easeInOut",
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* Órbita exterior — sentido horario */}
//       <motion.div
//         className="absolute flex h-[340px] w-[340px] items-center justify-center"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/25" />
//         <div className="absolute left-1/2 top-0 -translate-x-1/2">
//           <SatelliteMesh small />
//         </div>
//       </motion.div>

//       {/* Órbita interior — sentido antihorario + nodo tech */}
//       <motion.div
//         className="absolute flex h-[260px] w-[260px] items-center justify-center"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute inset-0 rounded-full border border-emerald-400/15" />
//         <div className="absolute left-1/2 top-0 -translate-x-1/2">
//           <TechNode />
//         </div>
//       </motion.div>

//       {/* Planeta / núcleo */}
//       <div className="relative z-10 flex flex-col items-center">
//         <motion.div
//           className="relative h-28 w-28 rounded-full bg-gradient-to-br from-teal-300 via-emerald-500 to-emerald-950 shadow-[0_0_40px_rgba(52,211,153,0.45),inset_0_-12px_24px_rgba(0,0,0,0.35)]"
//           animate={{ scale: [1, 1.03, 1] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <motion.div
//             className="absolute -inset-3 rounded-full border border-emerald-400/30"
//             animate={{ rotate: 360, opacity: [0.4, 0.85, 0.4] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//           />
//           <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/25 to-transparent" />
//         </motion.div>
//         <motion.div
//           className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
//           animate={{ opacity: [0.35, 0.9, 0.35], scaleX: [0.85, 1, 0.85] }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-400/70">
//           signal · online
//         </p>
//       </div>
//     </div>
//   );
// }

// function SatelliteMesh({ small }: { small?: boolean }) {
//   return (
//     <div className={small ? "scale-[0.85]" : ""}>
//       <div className="flex items-center gap-0.5 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
//         <div className="h-3 w-1.5 rounded-sm bg-slate-600" />
//         <div className="flex h-4 w-7 items-center justify-center rounded-sm bg-gradient-to-b from-slate-200 to-slate-400 shadow-inner">
//           <span className="h-1.5 w-3 rounded-sm bg-emerald-500/80" />
//         </div>
//         <div className="h-3 w-1.5 rounded-sm bg-slate-600" />
//       </div>
//     </div>
//   );
// }

// function TechNode() {
//   return (
//     <motion.div
//       className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-gray-900/90 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
//       animate={{
//         boxShadow: [
//           "0 0 12px rgba(52,211,153,0.2)",
//           "0 0 24px rgba(34,211,238,0.45)",
//           "0 0 12px rgba(52,211,153,0.2)",
//         ],
//       }}
//       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//     >
//       <div className="grid grid-cols-2 gap-0.5 p-1">
//         {[0, 1, 2, 3].map((i) => (
//           <span key={i} className="h-1.5 w-1.5 rounded-[1px] bg-emerald-400/90" />
//         ))}
//       </div>
//     </motion.div>
//   );
// }


























// import { motion } from "framer-motion";
// import gif3 from "/animacion3.webp";

// const CODE_FRAGMENTS = [
//   "</>",
//   "{ }",
//   "( )",
//   "=>",
//   "async",
//   "const",
//   "fetch",
//   "API",
//   "::",
// ];

// export default function Satelite() {
//   return (
//     <div
//       className="absolute right-10 z-0 mb-24 hidden h-[470px] w-[min(500px,46vw)] max-w-[90vw] overflow-visible lg:block"
//       aria-hidden
//     >
//       <div className="relative mx-auto h-full min-h-[400px] w-full max-w-[500px]">
//         {/* Base: animación / ilustración original */}
//         <img
//           src={gif3}
//           alt="Developer illustration"
//           width={500}
//           height={500}
//           className="relative z-0 h-full w-full object-contain object-right"
//         />

//         {/* Animación añadida (vinculada al tema dev / tech del gif): resplandor, anillo y símbolos de código */}
//         <div className="pointer-events-none absolute inset-0 z-10 overflow-visible">
//           <motion.div
//             className="absolute left-1/2 top-1/2 -z-10 h-[min(110%,420px)] w-[min(110%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-500/20"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
//           />
//           <motion.div
//             className="absolute bottom-[6%] left-1/2 h-36 w-[70%] max-w-[340px] -translate-x-1/2 rounded-[40%] bg-emerald-500/15 blur-3xl"
//             animate={{
//               opacity: [0.35, 0.65, 0.35],
//               scale: [0.96, 1.04, 0.96],
//             }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           />

//           <motion.div
//             className="absolute left-[8%] top-[14%] h-14 w-14 rounded-tl-lg border-l-2 border-t-2 border-emerald-400/45"
//             animate={{ opacity: [0.35, 0.85, 0.35] }}
//             transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-[10%] right-[8%] h-14 w-14 rounded-br-lg border-b-2 border-r-2 border-emerald-400/45"
//             animate={{ opacity: [0.35, 0.85, 0.35] }}
//             transition={{
//               duration: 3.2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.6,
//             }}
//           />

//           {CODE_FRAGMENTS.map((bit, i) => (
//             <motion.span
//               key={`${bit}-${i}`}
//               className="absolute bottom-[18%] whitespace-nowrap font-mono text-[11px] text-emerald-400/55 sm:text-xs"
//               style={{ left: `${6 + ((i * 37) % 78)}%` }}
//               animate={{
//                 opacity: [0, 0.85, 0],
//                 y: [0, -Math.min(130 + i * 10, 210)],
//                 x: [0, (i % 2 === 0 ? 1 : -1) * 12],
//               }}
//               transition={{
//                 duration: 3.8 + (i % 4) * 0.35,
//                 repeat: Infinity,
//                 delay: i * 0.42,
//                 ease: "easeOut",
//               }}
//             >
//               {bit}
//             </motion.span>
//           ))}

//           <motion.div
//             className="absolute left-[12%] right-[12%] top-[32%] h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
//             animate={{ top: ["30%", "48%", "30%"], opacity: [0.25, 0.65, 0.25] }}
//             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
