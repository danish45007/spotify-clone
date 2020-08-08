import React from 'react';
import "./Body.css";
import Header from '../Header/Header';
import { useDataLayerValue } from '../../DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../SongRow/SongRow';



function Body({spotify}) {
    // pulling weekly-discover data from the data layer
    const [{ discover_weekly },dispatch] = useDataLayerValue();
    console.log(discover_weekly)
    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
            <div className="body__info__text">
                <strong>{String(discover_weekly?.type).toUpperCase()}</strong>
                <h2>{discover_weekly?.name}</h2>
                <p>{discover_weekly?.description}</p>
                <div className="new">
                    <a className="a" href={discover_weekly?.external_urls?.spotify}><u className="u">{discover_weekly?.owner?.display_name}</u></a>
                    <p className="p">{String(discover_weekly?.followers?.total)+"likes"}</p>
                </div>
            </div>
            </div>

            <div className="body__song">
                <div className="body__icon">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="main">
            {discover_weekly?.tracks.items.map(item => (
                <SongRow track={item.track} />
                ))}
            </div>
        </div>
        
    )
}

export default Body;