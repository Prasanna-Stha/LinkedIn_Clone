import "/src/assets/CSS/MessageBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPen, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MessageBox({ profileSrc }) {
    const [showMessageBox, setShowMessageBox] = useState(false);

    const toggleMessageBox = () => {
        const messageBoxElement = document.getElementsByClassName("messageBox")[0];
        if (showMessageBox) {
            // Slide down to hide
            messageBoxElement.style.bottom = "-100px";
        } else {
            // Slide up to show
            messageBoxElement.style.bottom = "8px";
        }
        setShowMessageBox(!showMessageBox); // Toggle state
    };

    return (
        <>
            <div className="messageBox">
                <div className="messageUpperBox">
                    <div className="profileBox">
                        <img src={profileSrc} alt="Profile" />
                    </div>
                    <h6>Messaging</h6>
                    <div
                        className="icons"
                        style={{
                            width: "40%",
                            display: "flex",
                            justifyContent: "space-around",
                            cursor: "pointer",
                        }}
                    >
                        <FontAwesomeIcon icon={faEllipsis} />
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faChevronDown}
                            onClick={toggleMessageBox}
                            id="messageBoxPop"
                        />
                    </div>
                </div>

                <div className="searchBox">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                    <input type="text" placeholder="Search messages" />
                </div>

                <div className="priorityUser">
                    <h6>Focused</h6>
                    <h6>Other</h6>
                </div>
            </div>
        </>
    );
}

export default MessageBox;
