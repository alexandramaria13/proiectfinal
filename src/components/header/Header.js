import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flower from "../../images/295575_131936260312858_854285822_n.png";
import {
  faBars,
  faSearch,
  faSignInAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  Header as HeaderElement,
  Container,
  Icons1,
  Icons2,
  Nav,
  Name,
  Button,
} from "./Header.style";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <HeaderElement>
      <Container>
        <Icons1>
          <Button>
            <FontAwesomeIcon icon={faFacebook} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faInstagram} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPinterest} />
          </Button>
        </Icons1>
        <Nav>
          <img src={flower} />
          <Name>
            <p>Flori si Culori</p>
            <h2>handmadecudragoste</h2>
          </Name>
          <Dropdown icon={faBars} />
        </Nav>
        <Icons2>
          <Button>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faSignInAlt} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </Icons2>
      </Container>
    </HeaderElement>
  );
};

export default Header;
