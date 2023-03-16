import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 40px auto 20px;
  max-width: 1200px;
`;

export const MovieTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  gap: 20px;
  padding: 0 50px;
  width: 500px;
`;

export const SubMenuList = styled.ul`
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
`;

export const SubNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #001a00;
  &.active {
    color: #a01d1d;
  }
`;

export const SubMenuItem = styled.li`
  padding: 10px;
`;

export const DetailsStyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin: 30px auto 40px;
  font-size: 20px;
  background-color: grey;
  color: white;
  width: 160px;
  padding: 10px 20px;
  border-radius: 12px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
