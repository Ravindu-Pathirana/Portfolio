import { motion } from "framer-motion";
import { Brain, Code2, Database, Server, BarChart3 } from "lucide-react";

// 7 outer nodes + 1 center node (percent coordinates, 0-100).
// The center node sits behind the code window, so it's never labeled.
// `side` controls which side of the dot the label sits on, so labels
// always point outward, away from the card / container edges.
const nodes = [
  { x: 13.3, y: 20, label: "AI / ML", icon: Brain, side: "right" },
  { x: 46.7, y: 8.3, label: "DBMS", icon: Database, side: "bottom" },
  { x: 80, y: 18.3, label: "Frontend", icon: Code2, side: "left" },
  { x: 90, y: 53.3 },
  { x: 66.7, y: 83.3 },
  { x: 9, y: 86.7, label: "Data Science", icon: BarChart3, side: "right" },
  { x: 8.3, y: 60, label: "Backend", icon: Server, side: "right" },
  { x: 51.7, y: 50 },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
  [1, 7],
  [7, 4],
  [7, 2],
  [0, 7],
  [7, 5],
  [7, 6],
];

function NetworkLines({ className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nn-line" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#nn-line)"
          strokeWidth="1"
          strokeOpacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function NetworkDot({ x, y, delay }) {
  return (
    <motion.span
      className="absolute -translate-x-1/2 -translate-y-1/2 block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.15, 0.8] }}
      transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const labelSideClasses = {
  right: "left-full ml-3 top-1/2 -translate-y-1/2",
  left: "right-full mr-3 top-1/2 -translate-y-1/2",
  top: "bottom-full mb-2.5 left-1/2 -translate-x-1/2",
  bottom: "top-full mt-2.5 left-1/2 -translate-x-1/2",
};

function LabeledNode({ x, y, label, icon: Icon, side = "right", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + delay }}
      className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
      style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
    >
      <div className="relative">
        <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 shadow-[0_0_12px_rgba(96,165,250,0.35)]">
          <Icon size={16} className="text-blue-200" />
        </span>
        <span
          className={`absolute ${labelSideClasses[side]} text-xs font-medium text-gray-300 whitespace-nowrap`}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

const codeLines = [
  <>
    <span className="text-purple-400">const</span>{" "}
    <span className="text-sky-300">ravindu</span> = {"{"}
  </>,
  <>
    &nbsp;&nbsp;role:{" "}
    <span className="text-emerald-400">'CS &amp; Eng Undergrad'</span>,
  </>,
  <>
    &nbsp;&nbsp;stack: [<span className="text-emerald-400">'React'</span>,
    <span className="text-emerald-400">'Python'</span>,
    <span className="text-emerald-400">'Spring Boot'</span>],
  </>,
  <>
    &nbsp;&nbsp;focus: <span className="text-emerald-400">'AI × Software'</span>
    ,
  </>,
  <>
    &nbsp;&nbsp;building: <span className="text-orange-400">true</span>,
  </>,
  <>{"}"}</>,
];

export default function HeroVisual() {
  return (
    <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl" />

      <NetworkLines className="absolute inset-0 w-full h-full opacity-70" />

      {nodes.map((n, i) =>
        n.label ? (
          <LabeledNode
            key={i}
            x={n.x}
            y={n.y}
            label={n.label}
            icon={n.icon}
            side={n.side}
            delay={i * 0.25}
          />
        ) : (
          <NetworkDot key={i} x={n.x} y={n.y} delay={i * 0.25} />
        ),
      )}

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[320px] lg:w-[360px] glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-[11px] text-gray-500 font-mono">
            ravindu.js
          </span>
        </div>
        <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed text-gray-300">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.12 }}
              className="whitespace-pre"
            >
              {line}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-blue-400 align-middle ml-0.5"
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/10 text-[11px] text-gray-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Building
        </div>
      </motion.div>
    </div>
  );
}
