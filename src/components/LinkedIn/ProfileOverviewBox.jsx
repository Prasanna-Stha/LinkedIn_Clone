import "/src/assets/CSS/ProfileOverviewBox.css";
import sanijCover from "/src/assets/images/sanijCover.jpg"

function ProfileOverviewBox({profileSrc}) {
    const profileInfo = {
        dimension: "100px",
        userName: "Prasanna Shrestha",
        bioInfo: "Attended Asia Pacific University of Technology and Innovation (APU/APIIT)"
    };

    return (
        <div className="profileOverviewBox">
                <img src={sanijCover} alt="Cover Picture" style={{width: "100%", borderRadius: "4px"}}/>
            <div className="profileImageBox">
                <img src={profileSrc} alt="Profile Picture" className="profileImage" />
            </div>

            <div className="profileText">
                <h4 className="userName">{profileInfo.userName}</h4>
                <p className="bioInfo">{profileInfo.bioInfo}</p>
            </div>

            <div className="profileViewImpression">
                <div className="profileViews">
                    <span>Profile viewers</span><span>23</span>
                </div>
                <div className="postImpression">
                    <span>Post impressions</span><span>201</span>
                </div>
            </div>

            <div className="premiumSuggestionBox">
                <h6>Strengthen your profile with AI writing assistant</h6>
                <h6>Try Premium for $0</h6>
                <h6>Saved items</h6>
            </div>
        </div>
        
    );
}

export default ProfileOverviewBox;
