import styled from 'styled-components';

export const ItemContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemTitle = styled.li`
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  background-color: #f2f8fb;
  padding: 0 15px;
  margin-left: 0;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  border-bottom: 0;
`;

export const Item = styled.li`
  display: block;
  height: 44px;
  line-height: 44px;
  padding-left: 25px;
  border-bottom: 1px solid #e3e6e9;
  margin-left: 15px;
`;
