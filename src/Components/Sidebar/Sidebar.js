import React from 'react';
import "./Siderbar.css";
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';
function Sidebar() {
    // getting the data from the data layer
    const [ { playlists },dispatch ] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify" />
            <SidebarOptions title="Home" Icon={HomeIcon} />
            <SidebarOptions title="Search" Icon={SearchIcon} />
            <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist,index) => (
                <SidebarOptions key={index} title={playlist.name} />
              ))}


        </div>
    )
}

export default Sidebar
