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
  Faicon,
} from "./Header.style";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <HeaderElement>
      <Container>
        <Icons1>
          <Button>
            <Faicon className={"fb"} icon={faFacebook} title="Facebook" />
          </Button>
          <Button>
            <Faicon className={"insta"} icon={faInstagram} title="Instagram" />
          </Button>
          <Button>
            <Faicon className={"pint"} icon={faPinterest} title="Pinterest" />
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
            <Faicon className={"search"} icon={faSearch} title="Search" />
          </Button>
          <Button>
            <Faicon
              className={"log"}
              icon={faSignInAlt}
              title="Log in/Register"
            />
          </Button>
          <Button>
            <Faicon
              className={"view"}
              icon={faHeart}
              title="View your wishlist"
            />
          </Button>
        </Icons2>
      </Container>
    </HeaderElement>
  );
};

export default Header;
