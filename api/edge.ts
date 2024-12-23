// import Sentry from "../sentry.edge.config";

export const config = {
  runtime: 'edge',
};

export default async (req) => {
  try {
    const url = new URL(req.url);
    const name = url.searchParams.get('name');

    if (name) {
      // Sentry.captureException(new Error('Name parameter is not allowed!'));
      return new Response(
        'Name parameter is not allowed!',
        { status: 400 }
      );
    }

    return new Response(`Hello from ${process.env.VERCEL_REGION}`, {
      status: 200,
    });
  } catch (err) {
    // Sentry.captureException(err);
    return new Response(
      'An unexpected error occurred.',
      { status: 500 }
    );
  }
};
