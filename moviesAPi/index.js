var url = `http://www.omdbapi.com/?apikey=f110fe32&s=batman`;
fetch(url)
.then((success) => {success.json()})
.then((movies) =>{ console.log(movies)})
.catch((error) => console.log(error))