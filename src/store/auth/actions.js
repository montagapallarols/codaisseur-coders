import axios from "axios";

export function loginToken(token, profile) {
    return {
        type: "LOGIN_TOKEN",
        payload: {token, profile}
      };
}


const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

// A thunk creator
export function login(email, password) {
    // Return the thunk itself, i.e. a function
    return async function thunk(dispatch, getState) {
      // make a POST API request to `/login`
      try {
      const response = await axios.post(`${API_URL}/login`, {
          email: "kelley@codaisseur.com",
          password: "abcd",
        })

        
        console.log("Post Response", response.data);
        const token = response.data.jwt

        const meResponse = await axios.get(`${API_URL}/me`, { 
            headers: { Authorization: `Bearer ${token}` } 
        })

        console.log("Me response", meResponse)
        const userProfile = meResponse.data


      dispatch(loginToken(token, userProfile))
      localStorage.setItem("jwt", token)
    } catch(e) {
        console.log(e)
    }
    };
}
