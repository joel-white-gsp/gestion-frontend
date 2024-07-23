import CustomSelect from "common/Select";
import React from "react";
import styled from "styled-components";
import SearchIcon from "assets/svg/search-normal.svg";
import CustomInput from "common/Input";
import GoogleMapReact from "google-map-react";

const LocateGym = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Wrapper>
      <div className="locate-gym-section">
        <div className="locate-gym-desc-section">
          <div className="locate-gym-text">locate gym</div>
          <div className="find-gym-text">Find a GYM Near you</div>
          <div className="desc">
            To find a Club, use the search bar, navigate using the map, or turn
            on location services.
          </div>
          <div className="locate-select-img">
            <div className="locate-select">
              <CustomInput placeholder="Enter Address" />
            </div>
            <div className="search-section">
              <img src={SearchIcon} />
            </div>
          </div>
        </div>
        <div className="map-section">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </Wrapper>
  );
};

export default LocateGym;

const Wrapper = styled.div`
  .locate-gym-section {
    display: flex;
    align-items: center;
    margin-top: 100px;
    justify-content: space-between;
    gap: 50px;
  }
  .locate-gym-desc-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .locate-gym-text {
    color: #ff2338;
    font-size: 12px;
    font-weight: 600;
    font-family: Inter;
    letter-spacing: 12px;
    text-transform: uppercase;
  }
  .find-gym-text {
    color: #1b2129;
    font-size: 30px;
    text-transform: uppercase;
    font-family: "Monument Extended";
    line-height: 40px;
  }
  .desc {
    color: #1b2129;
    font-size: 14px;
  }
  .locate-select-img {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-top: 20px;
  }
  .locate-select {
    width: 100%;
  }
  .search-section {
    background-color: #ff2338;
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-section img {
    width: 18px;
    height: 18px;
  }
  .map-section {
    height: 350px;
    width: 700px;
  }
  @media (max-width: 768px) {
    .locate-gym-section {
      flex-direction: column;
      margin-top: 50px;
    }
    .map-section {
      width: 100%;
      max-width: 700px;
    }
    .locate-gym-text,
    .find-gym-text,
    .desc {
      text-align: center;
    }
  }
`;
