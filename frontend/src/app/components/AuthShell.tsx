import type { ReactNode } from "react";

export default function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-wrap">
      <aside className="flex flex-[1_1_420px] flex-col justify-between gap-12 bg-navy px-6 py-12 text-white md:px-16">
        <div className="font-serif text-2xl font-bold">Research Library</div>
        <div className="flex max-w-[460px] flex-col gap-4">
          <p className="font-serif text-[40px] font-semibold leading-tight">
            Every source, note and citation for your dissertation in one place.
          </p>
          <p className="text-base text-navy-muted">
            Save statutes, frameworks and articles, tag them by topic, link
            them to chapters and export your citations.
          </p>
        </div>
      </aside>

      <main className="flex flex-[1_1_480px] items-center justify-center px-4 py-8 md:px-16">
        <div className="card flex w-full max-w-[420px] flex-col gap-5 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}