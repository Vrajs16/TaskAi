import { fetch } from 'cross-undici-fetch'

export const getAuthorizationURL = async () =>
{
  const res = await fetch('http://localhost:8911/createAuthorization')
  const json = await res.json()

  return {
    url: json.data
  }
}