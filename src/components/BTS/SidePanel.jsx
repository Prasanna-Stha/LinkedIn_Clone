import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/logo.png';
import "./SidePanel.css";
import { 
    faHouse, 
    faIdBadge, 
    faCalendarDays, 
    faGear, 
    faChartLine, 
    faArrowRightFromBracket 
} from '@fortawesome/free-solid-svg-icons';

function SidePanel() {
    let dimension={
        "width": "200px",
        "height": "200px"
    }
    return (
        <div className="leftMenuBar">
            <div className="logoBox">
                <img src={logo} alt="logo img" style={{width: dimension.width, height: dimension.height}}/>
            </div>
            <div className="menuElem overviewBox">
                <div className="iconBox">
                    <a href="#"><FontAwesomeIcon icon={faHouse} /></a>
                </div>
                <div className="menuBox">
                    <a href="#">Overview</a>
                </div>
            </div>
            <div className="menuElem viewProfileBox">
                <div className="iconBox">
                    <a href="#"><FontAwesomeIcon icon={faIdBadge} /></a>
                </div>
                <div className="menuBox">
                    <a href="#">View Profile</a>
                </div>
            </div>
            <div className="menuElem calendarBox">
                <div className="iconBox">
                    <a href="#"><FontAwesomeIcon icon={faCalendarDays} /></a>
                </div>
                <div className="menuBox">
                    <a href="#">Calendar</a>
                </div>
            </div>
            <div className="menuElem settingBox">
                <div className="iconBox">
                    <a href="#"><FontAwesomeIcon icon={faGear} /></a>
                </div>
                <div className="menuBox">
                    <a href="#">Setting</a>
                </div>
            </div>
            <div className="menuElem analyticBox">
                <div className="iconBox">
                    <a href="#"><FontAwesomeIcon icon={faChartLine} /></a>
                </div>
                <div className="menuBox">
                    <a href="#">Analytics</a>
                </div>
            </div>
            <div className="menuElem logOutBox">
                <div className="iconBox">
                    <a href="../logInPage/index.html">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </a>
                </div>
                <div className="menuBox">
                    <a href="../logInPage/index.html">Log Out</a>
                </div>
            </div>
        </div>
    );
}

export default SidePanel;
