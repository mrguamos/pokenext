export default async function pokeHandler(req: string, opts?: RequestInit) {
  const [url, query] = req.split('?')
  const params = new URLSearchParams(query)
  return fetch(
    `${process.env.BASE_URL}/${url?.replace(
      '/api/poke',
      ''
    )}?${params.toString()}`,
    opts
  )
}
