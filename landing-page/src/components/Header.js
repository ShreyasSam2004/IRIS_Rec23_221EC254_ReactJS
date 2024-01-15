import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter ,faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img alt="logo" src="https://cdn.iris.nitk.ac.in/about/img/core-img/logo.png" />
      </Logo>

      <NavMenu>
        <a href="/home">
          <span>HEROSECTION</span>
        </a>
        <a href="/Modules">
          <span>MODULES</span>
        </a>
        <a href="/Projects">
          <span>PROJECTS</span>
        </a>
        <a href="/Integrations">
          <span>INTEGRATIONS</span>
        </a>
        <a href="/teaminfo">
          <span>TEAM INFO</span>
        </a>
        <a href="/Contact">
          <span>CONTACT US</span>
        </a>
        <a href="https://www.instagram.com/nitk_surathkal/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/nitk_surathkal" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://twitter.com/nitk_surathkal" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  @media (max-width: 768px) {
    padding: 0 15px; /* Adjusted padding for smaller screens */
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 375px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: #f9f9f9;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: #f9f9f9;
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
    @media (max-width: 768px) {
      display: none; /* Hide the menu on mobile for illustration */
    }
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    width: 80px;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: auto;
  }
`;

export default Header;
