// auth endpoint <taking care spotifu dev api>
export const authEndPoint = "https://accounts.spotify.com/authorize";

// redirect url after authorizing the user
const redirectURI = "http://localhost:3000/";

// clinet-Id
const clientID = "20a9e6a72dc64b30988f9922c49dfc00";

// Allowed data/methods to redering on the app scope
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

//   composing login url
export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
