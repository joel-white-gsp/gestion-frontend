import CustomButton from "common/Button";
import React from "react";
import styled from "styled-components";

const HomeCard = ({ card, id }) => {
  return (
    <Wrapper className="slick-card-wrapper">
      <div className="card-container" key={id}>
        <div className="card-subs">
          {card === "standard" && "Standard"}
          {card == "premium" && "Premium"}
          {card == "regularAdult" && "Regular adult"}{" "}
        </div>
        <div className="card-price-batch">
          <div className="price">
            {card == "regularAdult" ? "$25" : "$35"} / month
          </div>
          <div>
            {card == "standard" && <div className="standard">Most popular</div>}
            {card == "premium" && (
              <div className="premium">10% Off for Yoga Class</div>
            )}
            {card == "regularAdult" && (
              <div className="regularAdult">for 12 months</div>
            )}
          </div>
        </div>
        <div className="card-desc">
          <div className="week-trial">2 Week Free Trial</div>
          <div>
            {" "}
            {card == "regularAdult" ? "20" : "30"} minutes of{" "}
            <strong>heart-pumping spin</strong>{" "}
          </div>
          <div>
            {" "}
            {card == "regularAdult" ? "20" : "30"} minutes of strength training
          </div>
          <div>
            {" "}
            <strong>50</strong> Class Times Available
          </div>
          <div>20 minutes of invigorating yoga</div>
          {card !== "regularAdult" && (
            <div>
              Unlimited <strong> CrossFit </strong>Classes
            </div>
          )}
          {card !== "regularAdult" && <div>One Full Month Free</div>}
          {card !== "regularAdult" && <div>First 25 New Members Only</div>}
        </div>
        <div className="disable-button">
          <CustomButton
            title={"Get Started"}
            className="home-card-btn"
            width={"130px"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeCard;

const Wrapper = styled.div`
  .card-container {
    padding: 15px 20px;
    /* width: 280px; */
    height: 500px;
    border: 1px solid #b7b7b7;
    background-color: #f6f7f9;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-subs {
    color: #1b2129;
    font-size: 25px;
    font-weight: 700;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
  .card-price-batch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 20px;
    margin-bottom: 30px;
    width: 100%;
  }
  .price {
    color: #1b2129;
    font-size: 22px;
    font-weight: 600;
  }
  .standard {
    background-color: #a1f65e;
    color: #1b2129;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 15px;
  }
  .premium {
    background-color: #fff;
    color: #1b2129;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 15px;
    width: 180px;
    text-align: center;
  }
  .regularAdult {
    background-color: #fff;
    color: #1b2129;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 15px;
    width: 180px;
    text-align: center;
  }
  .card-desc {
    display: flex;
    flex-direction: column;
    gap: 7px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #6a6a6a;
  }
  .week-trial {
    color: #ff152b;
    font-weight: 600;
  }
  .home-card-btn {
    margin-top: 30px;
    background-color: #1b2129;
    border: 1px solid #bababa;
  }
  .disable-button {
    display: none;
  }
`;
