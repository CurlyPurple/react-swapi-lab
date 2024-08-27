const BASE_URL = 'https://swapi.dev/api/'

export async function index() {
  const res = await fetch(`${BASE_URL}/starships`)
  return res.json()
}

