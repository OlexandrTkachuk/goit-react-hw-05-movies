import { MenuContainer, MenuItem, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <MenuContainer>
          <MenuItem>
            <StyledLink to="">Home</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="movies">Movies</StyledLink>
          </MenuItem>
        </MenuContainer>
      </div>
    </header>
  );
};