export default function ScrollIndicator() {
    return (
        <div className="mt-16 flex justify-center">

            <div className="flex flex-col items-center gap-3">

                <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Scroll
                </span>

                <div className="h-10 w-6 rounded-full border border-slate-600 p-1">

                    <div className="h-2 w-2 rounded-full bg-blue-400" />

                </div>

            </div>

        </div>
    );
}