import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  position: relative;
  height: 44px;
  line-height: 44px;
  min-width: 240px;
  background: #1ba9ba;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 0 15px;
`;

export const BackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

export const BackIcon = styled.svg`
  height: 42px;
  width: 42px;
  polyline {
    stroke: #fff;
    stroke-width: 2;
    fill: none;
  }
`;

export const HeaderTitle = styled.h1`
  max-width: 216px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  font-size: 100%;
  margin: 0;
`;
