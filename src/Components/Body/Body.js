import React from 'react';
import "./Body.css";
import Header from '../Header/Header';
import { useDataLayerValue } from '../../DataLayer';


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
        </div>
    )
}

export default Body;