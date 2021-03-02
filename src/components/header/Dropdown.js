import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, DropdownList, Content } from "./Dropdown.style";

const Dropdown = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <FontAwesomeIcon icon={icon} onClick={() => setIsOpen(!isOpen)} />
      <DropdownList isOpen={isOpen}>
        <Content>
          <p>Despre noi</p>
          <p>Magazin</p>
          <p>Contact</p>
        </Content>
      </DropdownList>
    </Container>
  );
};

export default Dropdown;
