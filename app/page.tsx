export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
            FlyRank AI Internship
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Production AI Product
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            A production-ready application foundation built with Next.js,
            responsive design, server components, and a deployable architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/health"
              className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              View health check
            </a>

            <a
              href="/about"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted/10"
            >
              About this project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}