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

// pulling the access token from the url response
export const getTokenFromUrl = () => {
    // getting the value after #
    return window.location.hash
    // keeping the data after the index 1
      .substring(1)
    //   spliting the data at &
      .split("&")
    //   reducing the array/strig of data into singular data
      .reduce((initial, item) => {
        //   spliting the data after =
        var parts = item.split("=");
        // decoding the encoded URI that means %2 ==> _
        initial[parts[0]] = decodeURIComponent(parts[1]);
        // finally returning the singular processed data
        return initial;
      }, {});
  };

//   composing login url
export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
