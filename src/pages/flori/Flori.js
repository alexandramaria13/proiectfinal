import React from "react";
import {
  Container,
  FirstPart,
  Descriere,
  Text,
  SecondPart,
  Row,
  Details,
  Name,
} from "./Flori.style";
import buchet from "../../images/dsc0078.jpg";
import pahare from "../../images/dsc0230.jpg";
import cos from "../../images/dscn9693.jpg";
import imagine from "../../images/dsc0467.jpg";

const Flori = () => {
  return (
    <Container>
      <FirstPart>
        <img src={imagine} />
        <Descriere>
          <Text>
            Aranjamente florale sunt decoratiuni ample, voluminoase, parfumate
            si extrem de proaspete. Aranjamentele sunt cu atat mai speciale cu
            cat pot fi usor de transportat si foarte usor de folosit pentru
            destinatar, intrucat florile sunt puse intr-un suport burete floral
            imbibat cu apa, astfel incat florile rezista mai mult timp, nu este
            necesara o vaza si dupa ofilirea florilor ramane ca amintire cosul
            sau vasul in care a fost adus aranjamentul.
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={buchet} />
            <Name>Buchetele</Name>
          </Details>
          <Details>
            <img src={pahare} />
            <Name>Pahare decorate</Name>
          </Details>
          <Details>
            <img src={cos} />
            <Name>Cosulete</Name>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Flori;
