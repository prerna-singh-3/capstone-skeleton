export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-muted">
          About
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          About this project
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          This application is being developed as part of the FlyRank AI
          Engineering internship. It provides a production-ready foundation
          with structured routing, responsive UI, and deployment support.
        </p>

        <div className="mt-10 rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold">Project status</h2>

          <p className="mt-2 text-muted">
            Application foundation and routing are currently being set up.
          </p>
        </div>
      </section>
    </main>
  );
}