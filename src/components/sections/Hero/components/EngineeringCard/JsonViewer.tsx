import type { Project } from "../../../../../types/projects";

import JsonLine from "./JsonLine";
import TypingCursor from "./TypingCursor";

interface JsonViewerProps {
  project: Project;
}

export default function JsonViewer({ project }: JsonViewerProps) {

  return (
    <div className="overflow-hidden rounded-xl border border-white/5 bg-[#09101D]">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
          Payload
        </span>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-[11px] font-medium text-emerald-400">
            Synced
          </span>
        </div>
      </div>

      <div className="space-y-0.5 p-4 font-mono text-[14px]">
        <p className="text-slate-500">{"{"}</p>

        {project.payload.map((line) => (
          <JsonLine
            key={line.keyName}
            keyName={line.keyName}
            value={line.value}
          />
        ))}

        <div className="flex items-center">
          <span className="text-slate-500">{"}"}</span>
          <TypingCursor />
        </div>
      </div>
    </div>
  );
}