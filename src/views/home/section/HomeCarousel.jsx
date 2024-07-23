import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import HomeCard from "./HomeCard";
import leftArrow from "assets/svg/red-left-arrow.svg";
import rightArrow from "assets/svg/red-right-arrow.svg";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <img src={leftArrow} alt="left arrow" />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <img src={rightArrow} alt="right arrow" />
    </div>
  );
};

const HomeCarousel = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.4,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
    customPaging: (i) => <div className="custom-pagination">{i + 1}</div>,
    appendDots: (dots) => (
      <div>
        <ul className="pagination" style={{ margin: "0px" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  const card = [
    {
      id: 1,
      card: "premium",
    },
    {
      id: 2,
      card: "standard",
    },
    {
      id: 3,
      card: "regularAdult",
    },
    {
      id: 4,
      card: "premium",
    },
    {
      id: 5,
      card: "standard",
    },
    {
      id: 6,
      card: "regularAdult",
    },
  ];

  return (
    <Wrapper>
      <div className="slider-container">
        <Slider {...settings}>
          {card?.map((el, i) => {
            return <HomeCard card={el?.card} id={i} />;
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default HomeCarousel;

const Wrapper = styled.div`
  .slick-list {
    height: 680px;
    padding: 55px 60px 0px !important;
  }
  .center .slick-center {
    transform: scale(1.2);
  }

  .slick-slide {
    transition: transform 0.5s ease;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .slider-container {
    margin: 0 auto;
    padding: 40px 0;
    width: 95%;
  }
  .slick-center {
    .card-container {
      border: 2px solid #ff152b;
      background: #fff;
      box-shadow: 5px 5px 16px 2px #0000001a;
    }
    .disable-button {
      display: inline-block;
    }
  }
  .slick-card-wrapper {
    margin: 0px 12px;
  }
  .slick-center {
    .slick-card-wrapper {
      margin: 0px 35px;
    }
  }
  .custom-pagination {
    color: #ff152b;
    font-weight: 700;
    font-size: 12px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .slick-dots li.slick-active .custom-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff152b;
    color: #fff;
    width: 30px;
    height: 30px;
  }
  .prev img {
    display: block;
    position: absolute;
    z-index: 999;
    top: 45%;
    left: -40px;
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
  .next img {
    display: block;
    position: absolute;
    z-index: 999;
    top: 46%;
    right: -40px;
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    .slick-list {
      padding: 0px !important;
      height: 544px !important;
      .card-container {
        border: 2px solid #ff152b;
        background: #fff;
        box-shadow: 5px 5px 16px 2px #0000001a;
      }
    }
  }
`;
