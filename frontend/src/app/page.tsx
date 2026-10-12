// TEMPORARY test page: confirms the fonts, colors and form styles are working.
// Replace this with a redirect to /sources once the real pages exist.
export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-6 p-10">
      <h1 className="text-3xl">Research Library</h1>
      <p className="text-muted">
        If this heading is in a serif font and the buttons below are green,
        grey and red, your styles are set up correctly.
      </p>

      <div className="card space-y-4">
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="field"
            placeholder="you@example.com"
          />
          <p className="field-hint">This is a hint under a field.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn-primary">
            Primary
          </button>
          <button type="button" className="btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn-danger">
            Delete
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-tag-ai px-2.5 py-1 text-xs font-medium text-tag-ai-ink">
            AI governance
          </span>
          <span className="rounded-full bg-tag-law px-2.5 py-1 text-xs font-medium text-tag-law-ink">
            Cyber law
          </span>
          <span className="rounded-full bg-tag-sec px-2.5 py-1 text-xs font-medium text-tag-sec-ink">
            Cybersecurity
          </span>
        </div>
      </div>
    </main>
  );
}