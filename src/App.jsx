import React from "react";
import Navbar from "./components/LinkedIn/Navbar.jsx";
import ProfileOverviewBox from "./components/LinkedIn/ProfileOverviewBox.jsx";
import NewsFeed from "./components/LinkedIn/NewsFeed.jsx";
import RecommendationBox from "./components/LinkedIn/RecommendationBox.jsx";
import MessageBox from "./components/LinkedIn/MessageBox.jsx"

import profileImg from "/src/assets/images/Prasanna.jpg"

function App() {
  return (
    <>
    <div style={{width: "100%", height: "100%", backgroundColor: "#F3F2EF", overflowX: "hidden"}}>
      <Navbar profileSrc={profileImg} />
      <div style={{width: "90vw", display: "flex", justifyContent: "space-between", margin: "auto", padding: "12px" }}>
        <ProfileOverviewBox profileSrc={profileImg} />
        <NewsFeed profileSrc={profileImg} />
        <RecommendationBox />
      </div>
      <MessageBox profileSrc={profileImg}/>
    </div>
    </>
  );
}

export default App;
