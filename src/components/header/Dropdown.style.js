import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownList = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  top: calc(100% + 5px);
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  width: 180px;
  padding: 5px;
  ${({ isOpen }) => (isOpen ? `display: block` : `display: none`)};
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 10px;
  p {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
    color: #191970;
    padding: 3px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: rgba(65, 105, 225, 1);
    }
  }
`;
