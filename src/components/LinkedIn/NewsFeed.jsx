import nimeshImg from "/src/assets/images/Nimesh.jpg"
import sanijImg from "/src/assets/images/Sanij.jpg"
import dipeshImg from "/src/assets/images/Dipesh.jpg"
import saphalImg from "/src/assets/images/Saphal.jpg"

import sanijPost from "/src/assets/images/SanijPost.jpg"
import nimeshPost from "/src/assets/images/nimeshPost.jpg"
import dipeshPost from "/src/assets/images/dipeshPost.jpg"
import saphalPost from "/src/assets/images/saphalPost.jpg"

import "/src/assets/CSS/NewsFeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare, faImage, faCalendarAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function NewsFeed( {profileSrc} ) {
    const [userInfo, setUserInfo] = useState([
        {
            id: 100,
            name: "Nimesh Nepal",
            position: "CEO | Public Speaker",
            publishedDate: "2 days ago",
            caption: "Stepping forward with purpose and growth!",
            like: 0,
            showReactions: false,
            post: nimeshPost,
            imgSrc: nimeshImg
        },
        {
            id: 101,
            name: "Sanij Shrestha",
            position: "Flutter | Backend Developer",
            publishedDate: "1 week ago",
            caption: "I’m happy to share that I’ve obtained a new certification: Learn Python from Programiz!",
            like: 0,
            showReactions: false,
            post: sanijPost,
            imgSrc: sanijImg
        },
        {
            id: 102,
            name: "Dipesh Malla",
            position: "Software engineer | React JS",
            publishedDate: "5 days ago",
            caption: "Building skills, one day at a time.",
            like: 0,
            showReactions: false,
            post: dipeshPost,
            imgSrc: dipeshImg
        },
        {
            id: 103,
            name: "Saphal Maharzan",
            position: "Software engineer | React JS",
            publishedDate: "2 days ago",
            caption: "Stepping forward with purpose and growth!",
            like: 0,
            showReactions: false,
            post: saphalPost,
            imgSrc: saphalImg
        }
    ]);

    const handleReactionBox = (index, visible) => {
        const updatedUserInfo = [...userInfo];
        updatedUserInfo[index].showReactions = visible;
        setUserInfo(updatedUserInfo);
    };

    const handleReactionClick = (index, reaction) => {
        const updatedUserInfo = [...userInfo];
        updatedUserInfo[index].like += 1;
        updatedUserInfo[index].selectedReaction = reaction;
        setUserInfo(updatedUserInfo);
    };

    return (
        <div className="newsFeed">
            <div className="initialPostBox">
                <div className="postContent">
                    <div className="profilePicBox">
                        <img src={profileSrc} alt="Your Profile" className="profilePic" />
                    </div>
                    <div className="postBox">
                        <a href="#">Start a post</a>
                    </div>
                </div>
                <div className="postType">
                    <div className="postBoxes">
                        <FontAwesomeIcon icon={faImage} className="postIcon" />
                        <h6>Media</h6>
                    </div>
                    <div className="postBoxes">
                        <FontAwesomeIcon icon={faCalendarAlt} className="postIcon" />
                        <h6>Event</h6>
                    </div>
                    <div className="postBoxes">
                        <FontAwesomeIcon icon={faNewspaper} className="postIcon" />
                        <h6>Write article</h6>
                    </div>
                </div>
            </div>

            {/* Suggested Post */}
            <div className="suggestedPost">
                {userInfo.map((user, index) => (
                    <div className="postCard" key={index}>
                        <div className="postHeader">
                            <img src={user.imgSrc} alt={`${user.name}'s profile`} className="postProfilePic" />
                            <div className="userDetails">
                                <h5>{user.name}</h5>
                                <p>{user.position}</p>
                                <span className="postDate">{user.publishedDate}</span>
                            </div>
                        </div>
                        <div className="postBody">
                            <p>{user.caption}</p>
                        </div>
                        <div className="mainPost">
                            <img src={user.post} alt={user.name} style={{width: "100%", height: "auto", borderRadius: "8px"}}/>
                        </div>  
                        <div className="interactions">

                            <div className="like" onMouseEnter={() => handleReactionBox(index, true)} onMouseLeave={() => handleReactionBox(index, false)}>
                                <FontAwesomeIcon icon={faThumbsUp} className="likeIcon" />
                                <span className="likeTracker">{user.like} {user.like === 1 || user.like === 0 ? " like" : " likes"}</span>
                                {user.showReactions && (
                                    <div className="reactionBox">
                                        {["👏", "👍", "💙", "😆", "💡", "👌"].map((reaction, i) => (
                                            <span key={i} onClick={() => handleReactionClick(index, reaction)}>{reaction}</span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="comment">
                                <FontAwesomeIcon icon={faComment} className="commentIcon" />
                                <span>Comment</span>
                            </div>
                            <div className="share">
                                <FontAwesomeIcon icon={faShare} className="shareIcon" />
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;
