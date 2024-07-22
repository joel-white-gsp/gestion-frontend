import { Select as Select_ } from 'antd';
import styled from 'styled-components'

export const { Option } = Select_;
export const Select = ({ className, ...props }) => {
  return (
    <Wrapper className={props.wrapperClassName ? props.wrapperClassName : ""}>
      <Select_ {...props} className={`selectContainer ${className}`} />
    </Wrapper>
  )
};

const Wrapper = styled.div`
.input {
  min-height: 34px;
}
`