import ReactCountryFlag from 'react-country-flag';
import styled from 'styled-components'
import { countryName } from 'common/country';

export default function CountryFlag(props) {
  if (props.country) {
    return (
      <Wrapper>
        <ReactCountryFlag svg 
          className={`imageContainer`} 
          countryCode={props.country}
          title={countryName(props.country)}
        />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <ReactCountryFlag svg 
        className={`imageContainer`} 
        countryCode={props.title} 
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .imageContainer{
    margin-right: 8px;
    width: 35px !important;
    height: 35px !important;
    object-fit: cover;
    border-radius: 50%;
  }
`
