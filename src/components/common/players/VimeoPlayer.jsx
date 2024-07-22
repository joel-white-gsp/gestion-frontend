import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';

export default function VimeoPlayer({ sourceUrl }) {
  return (
    <Wrapper>
      <Vimeo
        video={sourceUrl}
        paused={true}
        className={"vimeo-video-section"}
        responsive
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  .vimeo-video-section {
    height: 100%;
    iframe {
      width: 100%;
    }
  }
`