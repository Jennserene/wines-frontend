const fetchWines = () => {
  return fetch(`https://henery-wine-api.herokuapp.com/wines`)
    .then((response) => response.json())
}

const fetchWineByID = (wineID) => {
  return fetch(`https://henery-wine-api.herokuapp.com/wines/${wineID}`)
    .then((response) => response.json())
}

const addWine = (wineObject) => {
  return fetch('https://henery-wine-api.herokuapp.com/wines/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(wineObject)
  })
}

export default {
  fetchWineByID,
  fetchWines,
  addWine
}