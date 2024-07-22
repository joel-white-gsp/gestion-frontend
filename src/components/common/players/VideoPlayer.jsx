/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

export default function VideoPlayer(props) {
  return (
    <Wrapper>
      <div className="video-section">
        <iframe
          src={props.src}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          autoplay
          title="Video"
        ></iframe>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  .video-section {
    padding: 66.25% 0 0 0;
    position: relative;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`