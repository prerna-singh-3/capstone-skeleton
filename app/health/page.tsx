import { headers } from "next/headers";

type HealthData = {
  status: string;
  service: string;
  timestamp: string;
};

async function getHealthData(): Promise<HealthData> {
  const headersList = await headers();
  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch health data");
  }

  return response.json();
}

export default async function HealthPage() {
  const data = await getHealthData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-muted">
          System
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Health Check
        </h1>

        <p className="mt-4 text-lg text-muted">
          Live application health data fetched from the API.
        </p>

        <div className="mt-10 rounded-xl border border-border p-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="font-semibold">
              {data.status.toUpperCase()}
            </span>
          </div>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm text-muted">Service</dt>
              <dd className="mt-1 font-medium">{data.service}</dd>
            </div>

            <div>
              <dt className="text-sm text-muted">Last checked</dt>
              <dd className="mt-1 font-medium">
                {new Date(data.timestamp).toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}