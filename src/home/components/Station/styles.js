import styled from 'styled-components';

export const StationWrapper = styled.div`
  display: flex;
`;

export const StationContainer = styled.div`
  flex: 1;
  font-size: 20px;
  line-height: 45px;
  height: 45px;
  border-bottom: 1px solid #eaeaea;
`;

export const StationInput = styled.input`
  color: #000;
  width: 100%;
  margin-left: 0;
  margin-top: 8px;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: #fff;
  padding: 0;
  line-height: 1.5;
`;

export const SwapWrapper = styled.div`
  width: 70px;
  height: 40px;
  line-height: 40px;
  transition-property: transform;
  transition-duration: 0.3s;
`;

export const Swap = styled.img`
  width: 70px;
  height: 40px;
`;
