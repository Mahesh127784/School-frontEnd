import { tokensRefresher } from "../apis/handleAuthorization/HandleAuth";

const AuthByRefreshToken = async (refreshToken) => {
  // check weather user is autherized by checking access token

  if (!refreshToken) {
    // no tokens stored in the localStoarge
    console.log("No refresh token found");

    return false;
  } else {
    // login user by refreshing accesstoken if user have a valid refresh token
    try {
      const refreshedTokens = await tokensRefresher("users", {
        refreshToken,
      });
      const newTokens = refreshedTokens.data;
      //set new tokens in local storage
      localStorage.setItem("tokens", JSON.stringify(newTokens));

      return newTokens;
    } catch (error) {
      //if the user contains expired refreshtoken
      console.log(error.response?.data?.message);
      // Remove expired token from localStorage
      localStorage.removeItem("tokens");

      return false;
    }
  }
};

export default AuthByRefreshToken;
