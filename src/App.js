import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
function App() {
  return (
    <div>
      <Loader className="d-flex align-items-center justify-content-center mt-4"
      type="Circles"
      color="#1ED760"
      height={100}
      width={100}
      timeout={5000}/>
      <Login />
    </div>
  );
}

export default App;
