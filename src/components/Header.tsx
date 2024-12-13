import styled from "styled-components";
import logo from "../assets/logo.png";
import { MenuIcon } from "../icons/Menu";
import { SearchIcon } from "../icons/Search";
import { CartIcon } from "../icons/Cart";
import { AccountIcon } from "../icons/Account";

const navigation = [
  "BEST SELLERS",
  "ENGAGEMENT&WEDDING",
  "JEWELLRY",
  "GIFT",
  "NEW BORN",
  "ABOUT",
];

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  background-color: #52106a;
  text-align: center;
  font-size: 10px;
  line-height: 13px;
  color: white;
  padding: 8px 44px;
  text-transform: uppercase;
  letter-spacing: 2.2px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 12px;
  position: relative;

  @media (min-width: 768px) {
    padding: 42px 26px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const Logo = styled.img`
  display: block;
  width: 106px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 169px;
  }
`;

const Navigation = styled.nav`
  display: none;

  @media (min-width: 1366px) {
    display: flex;
    padding-bottom: 20px;
    gap: 0 40px;
    justify-content: center;
    border-bottom: 1px solid #c4c4c4;
  }
`;

const NavItem = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 2.5999999046325684px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Icons = styled.div`
  display: flex;
  gap: 0 8px;

  & > :nth-child(2) {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 0 15px;

    & > :nth-child(2) {
      display: block;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar>Special for you. Best jewellry in the world</TopBar>
      <Content>
        <div>
          <MenuIcon />
        </div>
        <div>
          <Logo src={logo} />
        </div>
        <Icons>
          <SearchIcon />
          <AccountIcon />
          <CartIcon />
        </Icons>
      </Content>
      <Navigation>
        {navigation.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>
        ))}
      </Navigation>
    </HeaderWrapper>
  );
};
