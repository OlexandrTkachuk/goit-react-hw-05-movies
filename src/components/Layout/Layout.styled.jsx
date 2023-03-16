import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: #001a00;

  &.active {
    color: #a01d1d;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.li`
  padding: 10px;
`;

export const Container = styled.div`
  padding: 0px 30px;
  margin: 0 auto;
  background-color: rgb(255, 250, 250);
  min-height: 100vh;
`;
