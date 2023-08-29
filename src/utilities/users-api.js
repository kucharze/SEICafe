import axios from "axios";

// This is the base path of the Express route we'll define
const BASE_URL = "http://localhost:3001/api/users";
// const BASE_URL = "/api/users";

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.

  // FETCH
  //   const res = await fetch(BASE_URL, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     // Fetch requires data payloads to be stringified
  //     // and assigned to a body property on the options object
  //     body: JSON.stringify(userData)
  //   });

  // AXIOS
  const res = await axios.post(BASE_URL, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Check if request was successful
  if (res.status === 200) {
    // res.json() will resolve to the JWT
    return res.data;
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function login(data) {
  //Send data to backend to try a login
  const res = await axios.post(`${BASE_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Did the login work??
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Invalid Login");
  }
}
