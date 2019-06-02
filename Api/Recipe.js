export function getRecipeFromApiWithId(){
  const url = "http://51.68.125.95:5000/recipe"
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
