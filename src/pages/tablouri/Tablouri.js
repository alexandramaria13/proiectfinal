import React from "react";
import imagine from "../../images/104706986_1630854013754401_7734214582614726916_n.jpg";
import {
  Container,
  FirstPart,
  Descriere,
  Text,
  SecondPart,
  Row,
  Details,
  Name,
} from "./Tablouri.style";
import familie from "../../images/117111829_1667762650063537_8132274013586530224_n.jpg";
import peisaj from "../../images/116798589_1667762680063534_8774252057385701570_n.jpg";
import pesti from "../../images/106113074_1635680999938369_4443206497122939864_n.jpg";

const Crosetate = () => {
  return (
    <Container>
      <FirstPart>
        <img src={imagine} />
        <Descriere>
          <Text>
            "Un morman de pietre incetează a fi un morman de pietre în momentul
            în care un singur om, care îl contemplă, vede în el imaginea unei
            catedrale." Antoine De Saint Exupéry
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={familie} />
            <Name>Tablou familie</Name>
          </Details>
          <Details>
            <img src={peisaj} />
            <Name>Tablou peisaj</Name>
          </Details>
          <Details>
            <img src={pesti} />
            <Name>Tablou pesti</Name>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Crosetate;
