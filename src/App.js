import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { useEffect,useState } from 'react';
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Components/Player/Player';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import Loader from 'react-loader-spinner';

// super clinet object of spotify for comm. with spotify API
const spotify = new SpotifyWebApi();

function App() {
  // token state
  const [token, settoken] = useState(null)
  // useEffect code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // setting the anchor part to empty string
    window.location.hash = ""
    const _token = hash.access_token
    // if token exists
    if (_token) {
      settoken(_token)
      // setting access_token to spotify client object
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        console.log(user)
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(_token)
  },[])
  return (
    <div>
      {
        token ? (
          <Player />
        )
        : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
