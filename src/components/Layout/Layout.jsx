import { Outlet } from 'react-router-dom';
import {
  Container,
  MenuContainer,
  MenuItem,
  StyledLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <MenuContainer>
            <MenuItem>
              <StyledLink to="/">Home</StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </MenuItem>
          </MenuContainer>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </Container>
  );
};
