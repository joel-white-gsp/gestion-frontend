import React, { useState } from "react";
import styled from "styled-components";
import globalImage from "assets/svg/global.svg";
import m2Logo from "assets/svg/m2-logo.svg";
import { UnorderedListOutlined } from "@ant-design/icons";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Wrapper>
            <div className="header-section">
                <div>
                    <img src={m2Logo} />
                </div>
                <div className="header-order-list">
                    <div className="header-list">Membership</div>
                    <div className="header-list">Get Direction/Itinerary</div>
                    <div className="header-list">Login</div>
                    <div className="header-list global-list">
                        {" "}
                        <img src={globalImage} className="global-image" /> EN / FR
                    </div>
                </div>
                <div className="mobile-view">
                    <div className="mobile-menu" onClick={() => {
                        setShowMenu(!showMenu)
                    }}>
                        <UnorderedListOutlined className="mobile-menu-icon" />
                    </div>
                    {showMenu && (
                        <div className="mobile-order-list">
                            <div className="mobile-list">Membership</div>
                            <div className="mobile-list">Get Direction/Itinerary</div>
                            <div className="mobile-list">Login</div>
                            <div className="mobile-list global-list">
                                {" "}
                                <img src={globalImage} className="global-image" /> EN / FR
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-bottom:20px ;
  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-order-list {
    display: flex;
    align-items: center;
    gap: 60px;
  }
  .header-list {
    font-size: 16px;
    font-weight: 600;
    color: #1d2229;
    cursor: pointer;
  }
  .global-list {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .global-image {
    width: 24px;
    height: 24px;
  }
  .mobile-view {
    display: none;
  }
  @media (max-width: 920px) {
    .header-order-list {
      display: none;
    }
    .mobile-menu {
      cursor: pointer;
    }
    .mobile-view {
      display: block;
      position: relative;
    }
    .mobile-menu-icon{
        font-size: 25px;
        color: black;
    }
    .mobile-order-list {
      margin-top: 10px;
      padding: 10px 20px;
      background: #fff;
      box-shadow: 4px 4px 8px 0px #80808024;
      border: 1px solid #80808024;
      position: absolute;
      right: 0px;
    }
    .mobile-list{
        font-size: 16px;
        font-weight: 600;
        color: #1d2229;
        cursor: pointer;
        min-width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0px;
        margin: 4px 0px;
    }
  }
`;
