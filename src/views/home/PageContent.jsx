import React from "react";
import styled from "styled-components";
import HomeBanner from "./section/HomeBanner";
import Gym from "./section/Gym";
import HomeCarousel from "./section/HomeCarousel";
import HomeCard from "./section/HomeCard";
import LocateGym from "./section/LocateGym";

const PageContent = () => {
  return (
    <Wrapper>
      <div className="home-container">
        <HomeBanner />
        <Gym />
        <HomeCarousel />
        <LocateGym />
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div``;
