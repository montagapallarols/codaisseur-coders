export function selectToken(reduxState) {
    return reduxState.auth.token;
  }

  export function selectUserProfile(reduxState) {
    return reduxState.auth.me;
}

