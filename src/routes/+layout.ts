export const prerender = true;

export async function load({ url }): Promise<{ url: string; }> {
  return {
    url: url.pathname
  }
}
