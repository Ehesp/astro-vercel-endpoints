import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  return new Response('Hello, world!');
};
