export async function fetchCountries() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,cca2,cca3,flags,population,region,subregion,capital,languages,borders'
  );

  if (!res.ok) {
    throw new Error('Error fetching countries');
  }

  return res.json();
}

export async function fetchCountryByCode(code: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,population,region,subregion,capital,languages,tld,borders`
  )

  if (!res.ok) {
    throw new Error('Error fetching country')
  }

  const data = await res.json()
  return Array.isArray(data) ? data[0] : data
}

export async function fetchCountriesByCodes(codes: string[]) {
  const codeParam = codes.join(',')
  const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codeParam}&fields=name,cca3`)
  if (!res.ok) throw new Error('Error fetching border countries')
  return res.json()
}


