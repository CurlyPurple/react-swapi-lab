const BASE_URL = 'https://swapi.dev/api/'

export async function index() {
  const res = await fetch(`${BASE_URL}starships`)
  return res.json()
}

export async function show(starshipId) {
  const res = await fetch(`${BASE_URL}starships/${starshipId}`)
  return res.json()
}
