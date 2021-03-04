import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Faicon = styled(FontAwesomeIcon)`
  &.fb:hover {
    color: rgba(65, 105, 225, 1);
    text-decoration: none;
  }
  &.insta:hover {
    color: rgba(65, 105, 225, 1);
    text-decoration: none;
  }
  &.pint:hover {
    color: rgba(65, 105, 225, 1);
    text-decoration: none;
  }
  &.search:hover {
    color: rgba(65, 105, 225, 1);
    text-decoration: none;
  }
  &.log:hover {
    color: rgba(65, 105, 225, 1);
    text-decoration: none;
  }
  &.view:hover {
    color: rgba(65, 105, 225, 1);
    text-decoration: none;
  }
`;

export const Header = styled.div`
  background-color: #7fffd4;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 5px 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;

export const Icons1 = styled.ul`
  display: inline-flex;
  font-size: 18px;
  align-items: center;
`;

export const Icons2 = styled.ul`
  display: flex;
  font-size: 18px;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #191970;
  img {
    width: 30%;
    display: block;
    border-radius: 50%;
  }
`;

export const Name = styled.p`
  display: block;
  p {
    font-weight: 600;
    font-size: 22px;
  }
  h2 {
    font-size: 12px;
    color: #d2691e;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  color: #191970;
  margin-right: 10px;
  transition: color 0.3s;
`;
