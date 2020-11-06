import axios from "axios";

export function loginToken(token, profile) {
    return {
        type: "LOGIN_TOKEN",
        payload: {token, profile}
      };
}

export function logoutSession(){
    return {type: "LOGOUT_SESSION"}
}


const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

// A thunk creator
export function login(email, password) {
    // Return the thunk itself, i.e. a function
    return async function thunk(dispatch, getState) {
      // make a POST API request to `/login`
      try {
      const response = await axios.post(`${API_URL}/login`, {
          email: email,
          password: password,
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


export function bootstrapLoginState() { 
    return async function (dispatch, getState) {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
     
      const userProfile = await axios.get(`${API_URL}/me`, { 
        headers: { Authorization: `Bearer ${jwt}` } 
    })
      console.log("user profile loaded automatically", userProfile);
      dispatch(loginToken(jwt, userProfile.data));
    } else {
      console.log("no token stored in localstorage");
    }
  }};


  export function logout(dispatch, getState) {
    dispatch(logoutSession());
    localStorage.removeItem("jwt");
  }
