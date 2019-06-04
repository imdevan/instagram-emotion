import styled from '@emotion/styled'
import { breakpoints } from '../theme'

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;

  ${breakpoints.md} {
    max-width: 935px;
    width: 80%;
  }

  ${breakpoints.lg} {
    max-width: 1200px;
  }
`;

export default Container;