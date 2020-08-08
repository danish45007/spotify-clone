import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Components/Player/Player';
import { useDataLayerValue } from './DataLayer';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import Loader from 'react-loader-spinner';

// super clinet object of spotify for comm. with spotify API
const spotify = new SpotifyWebApi();

function App() {
  // token state
  // const [token, settoken] = useState(null)
  // pulling data from the data layer => {user}
  const [{ user,token }, dispatch] = useDataLayerValue();
  // useEffect code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // setting the anchor part to empty string
    window.location.hash = ""
    const _token = hash.access_token
    // if token exists
    if (_token) {
      // poping token data into the data-layer
      dispatch({
        type: "SET_TOKEN",
        token:_token
      })
      // setting access_token to spotify client object
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        // poping into the data layer
        dispatch({
          type: "SET_USER",
          user:user
        })
      }).catch((error) => {
        console.log(error)
      })
      
      // getting the user playlist from the spotify-API
      spotify.getUserPlaylists().then((playlists) => {
        // poping into the data layer
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        })
      }).catch((error) => {
        console.log(error)
      })

      // getting the daily playlist
      spotify.getPlaylist("0GB9chRwz1EI9MkT3BjfbO").then((response) => {
        // poping weekly discover data into the data layer
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      }).catch((error) => {
        console.log(error)
      })
    }
  },[])

  return (
    <div>
      {
        token ? (
          <Player spotify={spotify} />
        )
        : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
