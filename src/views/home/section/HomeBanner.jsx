import React from "react";
import styled from "styled-components";
import HomeBannerImage from "assets/images/home-banner.png";
import CustomButton from "common/Button";

const HomeBanner = () => {
  return (
    <Wrapper>
      <div className="home-banner-section">
        <div class="home-text-container">
          <div class="home-text-1">Keep your body fit & strong</div>
          <div class="home-text">Keep your body fit & strong</div>
        </div>
        <div className="banner-buttons">
          <div>
            <CustomButton
              title={"Start Today"}
              className="today-btn"
              width={"170px"}
            />
          </div>
          <div>
            <CustomButton title={"About M2 Move"} width={"170px"} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeBanner;

const Wrapper = styled.div`
  .home-text-container {
    position: relative;
    width: 65%;
    max-width: 80%;
    height: 160px;
    .home-text-1 {
      position: absolute;
      left: -13px;
      top: 4px;
      font-family: "Monument Extended";
      font-style: normal;
      font-weight: 800;
      font-size: 60px;
      line-height: 80px;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
    .home-text {
      position: absolute;
      left: 0px;
      top: 0px;
      font-family: "Monument Extended";
      font-style: normal;
      font-weight: 800;
      font-size: 60px;
      line-height: 80px;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .home-banner-section {
    background-image: url(${HomeBannerImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }
  .banner-buttons {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .today-btn {
    background-color: #ff5767;
    color: #2f2f2f;
    border: 2px solid #ff5767;
  }

  @media (max-width: 1280px) {
    .home-text-container {
      width: 85%;
      max-width: 85%;
    }
  }
  @media (max-width: 1020px) {
    .home-text-container {
      width: 85%;
      max-width: 85%;
      .home-text-1 {
        font-size: 40px;
        line-height: 63px;
      }
      .home-text {
        font-size: 40px;
        line-height: 63px;
      }
    }
  }
  @media (max-width: 450px) {
    .home-text-container {
      width: 85%;
      max-width: 85%;
      height: 130px;
      .home-text-1 {
        font-size: 28px;
        line-height: 45px;
      }
      .home-text {
        font-size: 28px;
        line-height: 45px;
      }
    }
    .banner-buttons {
      flex-direction: column;
      width: 90% !important;
      div,
      button {
        width: 100% !important;
      }
    }
  }
`;
