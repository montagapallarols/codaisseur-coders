const initialState = {
    me: null, // the logged-in user
    accessToken: null
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_TOKEN": {
            console.log("ACTION PAYLOAD", action.payload)
            return {
                me: action.payload.profile,
                accessToken: action.payload.token
            }
        }
      default: {
        return state;
      }
    }
  }