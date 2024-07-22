import { InputNumber as InputNumber_ } from 'antd';
import styled from 'styled-components';

export const InputNumber = ({ error, className, ...props }) => {
  return (
    <Wrapper>
      <InputNumber_ {...props} className={`${className} input ${error && 'has-error'}`} />
      {error && <span className="error">{error}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input {
    min-height: 34px;
  }
`
