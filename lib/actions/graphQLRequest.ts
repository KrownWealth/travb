export async function graphQLRequest(query: string) {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_ENPOINT
  const headers = { 'Content-Type': 'application/json' }

  if (!url) {
    throw new Error(
      'GraphQL endpoint URL is not defined in environment variables'
    )
  }

  const res = await fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify({ query })
  })

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.statusText}`)
  }

  const resJson = await res.json()
  return resJson
}
