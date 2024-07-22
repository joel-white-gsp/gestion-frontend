import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export default function RoCountryFlag(props) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    import(`./rounded-flags/${props.country}.png`)
    .then((module) => {
      setImgSrc(module.default);
    })
    .catch(err => {
    });
  }, [props.country])
  
  return (
    <Wrapper>
      {imgSrc ?
        <img src={imgSrc} />
      : ''}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
  }
`
