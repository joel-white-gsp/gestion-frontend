import BaseLayout from "layouts/base/BaseLayout";
import React from "react";
import styled from "styled-components";

export default function AuthedLayout({ children }) {
  return (
    <BaseLayout>
      <LayoutWrapper>
        <div
          style={{
            height: "100%",
          }}
        >
          {children}
        </div>
      </LayoutWrapper>
    </BaseLayout>
  )
}

const LayoutWrapper = styled.div`
`;
