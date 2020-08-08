import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
                <img
                className="footer__albumlogo"
                 src="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
                <div className="footer__songInfo">
                    <h4>Rockstar</h4>
                    <p>I am fu**ing Rockstar!!!</p>
                </div>
           </div>
           <div className="footer__center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
           </div>
           <div className="footer__right">
                <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider"  />
                </Grid>
                </Grid>
           </div>
        </div>
    )
}

export default Footer
