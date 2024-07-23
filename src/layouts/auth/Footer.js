import React from "react";
import styled from "styled-components";
import m2Logo from "assets/svg/m2-logo.svg";
import callLogo from "assets/svg/call.svg";
import locationLogo from "assets/svg/location.svg";
import smsLogo from "assets/svg/sms.svg";
import facebookLogo from "assets/svg/facebook.svg";
import xLogo from "assets/svg/X.svg";
import linkedInLogo from "assets/svg/linked-in.svg";

export default function Footer() {
  return (
    <Wrapper>
      <div className="footer-section">
        <div className="footer-top">
          <div className="m2-logo">
            <img src={m2Logo} />
          </div>
          <div className="footer-desc">
            <div className="footer-font">Terms & Conditions</div>
            <div className="footer-font">Privacy Policy</div>
            <div className="footer-font">Law 25</div>
          </div>
          <div className="footer-desc">
            <div className="info-section">
              <div>
                <img src={callLogo} className="footer-logo" />
              </div>
              <div className="footer-font">514-907-4008</div>
            </div>
            <div className="info-section">
              <div>
                <img src={locationLogo} className="footer-logo" />
              </div>
              <div className="footer-font">246 saint-jacques Saint-Jean</div>
            </div>
            <div className="info-section">
              <div>
                <img src={smsLogo} className="footer-logo" />
              </div>
              <div className="footer-font">info@domain.com</div>
            </div>
          </div>
          <div>
            <div className="footer-social">
              <div>
                <img src={facebookLogo} className="socail-logo" />
              </div>{" "}
              <div>
                <img src={xLogo} className="socail-logo" />
              </div>{" "}
              <div>
                <img src={linkedInLogo} className="socail-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2023 sgs. All rights reserved.</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f6f7f9;
  margin-left: -65px;
  margin-right: -65px;
  margin-top: 110px;
  border: 1px solid #B1BBC8;

  .footer-section {
    padding: 30px 120px;
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .footer-desc {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .footer-font {
    font-size: 14px;
    color: #1b2129;
    font-weight: 500;
  }
  .info-section {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .footer-logo {
    width: 15px;
    height: 15px;
  }
  .footer-social {
    display: flex;
    gap: 30px;
  }
  .socail-logo {
    width: 35px;
    height: 35px;
  }
  .footer-bottom {
    padding: 30px 0px;
    border-top: 1px solid #b1bbc8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #1b2129;
  }
  @media (max-width: 920px) {
    margin-left: -20px;
    margin-right: -22px;
    .footer-section {
      padding: 30px 20px;
    }
  }
  @media (max-width: 768px) {
  margin-top: 50px;
    .footer-top {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .m2-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 35px;
    }
    .footer-desc {
      align-items: center;
      justify-content: center;
      margin-bottom: 35px;
    }
  }
`;
