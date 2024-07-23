import React from "react";
import styled from "styled-components";
import SearchIcon from "assets/svg/search-normal.svg";
import CustomSelect from "common/Select";

const Gym = () => {
  const options1 = [
    {
      value: "CentreDémo",
      label: "Centre Démo",
    },
    {
      value: "CentreDémo",
      label: "Centre Démo",
    },
  ];
  const options2 = [
    {
      value: "275Notre-Dame St. EastMontréal",
      label: "275Notre-Dame St. EastMontréal",
    },
    {
      value: "275Notre-Dame St. EastMontréal",
      label: "275Notre-Dame St. EastMontréal",
    },
  ];
  const options3 = [
    {
      value: "Regularadult",
      label: "Regular adult",
    },
    {
      value: "Regularadult",
      label: "Regular adult",
    },
  ];

  return (
    <Wrapper>
      <div className="gym-section">
        <div className="gym-text">GYM</div>
        <div className="abonnement-text">Abonnements</div>
        <div className="corps-text">corps à la maison</div>
        <div className="select-search-section">
          <div className="select-section">
            <CustomSelect
              options={options1}
              width={"100%"}
              defaultValue={"Centre Démo"}
            />
            <CustomSelect
              options={options2}
              width={"100%"}
              defaultValue={"275Notre-Dame St. EastMontréal"}
            />
            <CustomSelect
              options={options3}
              width={"100%"}
              defaultValue={"Regular adult"}
            />
          </div>
          <div className="search-section">
            <img src={SearchIcon} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Gym;

const Wrapper = styled.div`
  padding: 80px 120px 70px 120px;
  .gym-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gym-text {
    color: #ff2338;
    font-size: 12px;
    font-weight: 600;
    font-family: Inter;
    letter-spacing: 15px;
  }
  .abonnement-text {
    color: #1b2129;
    font-size: 40px;
    font-weight: 800;
    text-transform: uppercase;
  }
  .corps-text {
    color: #1b2129;
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
  }
  .search-section {
    background-color: #ff2338;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-section img {
    width: 18px;
    height: 18px;
  }
  .select-search-section {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    width: 100%;
  }
  .select-section {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
  @media (max-width: 920px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    .select-search-section {
      flex-direction: column;
    }
    .select-section {
      flex-direction: column;
    }
    .search-section {
      width: 100%;
    }
  }
`;
