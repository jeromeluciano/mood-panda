export const fetcher = () => fetch('/api/currently-playing').then(r => r.json());