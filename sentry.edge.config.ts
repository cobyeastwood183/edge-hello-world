import * as Sentry from "@sentry/vercel-edge";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: true,
});

export default Sentry;