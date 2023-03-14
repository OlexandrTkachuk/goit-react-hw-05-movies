import { MenuContainer, MenuItem, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <div>
        <MenuContainer>
          <MenuItem>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </MenuItem>
        </MenuContainer>
      </div>
    </header>
  );
};
