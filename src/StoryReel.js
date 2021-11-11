import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://photornia.com/wp-content/uploads/2019/06/DSC_2822.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        title="Bharat"
      />
      <Story
        image="https://photornia.com/wp-content/uploads/2019/06/DSC_2822.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        title="Krishna"
      />
      <Story
        image="https://photornia.com/wp-content/uploads/2019/06/DSC_2822.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        title="Neelima"
      />
      <Story
        image="https://photornia.com/wp-content/uploads/2019/06/DSC_2822.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        title="Sreekripa"
      />
      <Story
        image="https://photornia.com/wp-content/uploads/2019/06/DSC_2822.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        title="RRR"
      />
    </div>
  );
}

export default StoryReel;
