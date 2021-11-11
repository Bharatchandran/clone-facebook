import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://static.toiimg.com/thumb/msid-84922228,width-800,height-600,resizemode-75,imgsize-63611,pt-32,y_pad-40/84922228.jpg"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="Bharatchandran"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post
        profilePic="https://static.toiimg.com/thumb/msid-84922228,width-800,height-600,resizemode-75,imgsize-63611,pt-32,y_pad-40/84922228.jpg"
        message="WOW this works!"
        timestamp="This is a timestamp"
        username="Bharatchandran"
      />
    </div>
  );
}

export default Feed;
