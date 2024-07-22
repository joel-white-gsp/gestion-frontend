import React from "react";
import styled from "styled-components";

export default function RankBadge (props) {
  return (
    <Wrapper>
      <div className={`rankTag rank_${props.label?.toLowerCase()}`}>
        {props.label}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .rankTag {
    display: inline-block;
    width: auto;
    min-width: 100px !important;
    padding: 5px 10px 5px;
    color: white;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    text-transform: uppercase;
    background-color: lightgrey;
    border-radius: 3px;
  }
  .rank_qbo {
    background-color: #9e9e9e;
  }
  .rank_tt {
    background-color: #1e719b;
  }
  .rank_ett {
    background-color: #658198;
  }
  .rank_etl {
    background-color: #971e1e;
  }
  .rank_tc {
    background-color: #3e246e;
  }
  .rank_sc {
    background-color: #17317e;
  }
  .rank_ec {
    background-color: #664100;
  }
  .rank_cp {
    background-color: #0c6b3f;
  }
  .rank_svp {
    background-color: #9e5d00;
  }
  .rank_rvp {
    background-color: #222222;
  }
  .rank_ca {
    background-color: #1f6b5e;
  }
  .rank_ra {
    background-color: #1f6b5e;
  }
  .rank_am {
    background-color: #1f6b5e;
  }
`;
