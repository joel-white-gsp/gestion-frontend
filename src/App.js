import React from "react";
import styled from "styled-components";
import Routes from "./Routes";
import "antd/dist/antd.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div
      id="myapp"
    >
      <Wrapper>
        <Routes />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
`;