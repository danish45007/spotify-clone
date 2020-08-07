import React from 'react'
import "./Player.css"
import Body from '../Body/Body'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'


function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body/>
            </div>
            <div className="player__footer">
                <Footer />                
            </div>
        </div>
    )
}

export default Player
