import React from "react";
import BaseLayout from "layouts/base/BaseLayout";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function AuthLayout({ children }) {
  return (
    <BaseLayout>
      <Wrapper>
        <Header />
        <div className={"right-root"}>{children}</div>
        <Footer />
      </Wrapper>
    </BaseLayout>
  );
}

const Wrapper = styled.div`
    padding: 30px 65px 0px 65px;
    @media (max-width:920px) {
      padding: 20px 20px 0px 20px;
    }

`;
