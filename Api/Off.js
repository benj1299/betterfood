export function getProductFromApiWithCodeBar(codeBar){
  const url = "https://fr.openfoodfacts.org/api/v0/produit/"+codeBar+ ".json"
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
