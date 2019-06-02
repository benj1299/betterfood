import { sha256 } from 'react-native-sha256';

export function logUser(email, password){
  const url = "http://51.68.125.95:5000/log-user"

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function checkUser(email){
  const url = "http://51.68.125.95:5000/checkuser/"+email
  return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }

export function createUser(lastname, firstname, email, password){
  const url = "http://51.68.125.95:5000/create-user"

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
