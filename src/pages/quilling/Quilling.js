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
} from "./Quilling.style";
import felicitare from "../../images/dscn3943.jpg";
import carduri from "../../images/dscn9607.jpg";
import marturii from "../../images/12038533_471483596358121_3269616697117400619_n.jpg";
import imagine from "../../images/dscn3947.jpg";

const Quilling = () => {
  return (
    <Container>
      <FirstPart>
        <img src={imagine} />
        <Descriere>
          <Text>
            Qulling – sau arta de a rula hartia, a fost practicata pentru prima
            data in Egiptul antic. Aceasta tehnica a fost preluata in sec. 16 şi
            17 in Franta si Italia cand doamnele din inalta societate au
            reinviat acest stil. Astazi tehnica are ceva in comun cu cea
            practicata de Elizabeth ( fiica lui George al III-lea), Joseph
            Bramah (faimosul stilist), d-l Delanz (pionier in arta care
            utilizeaza ca material de baza hartia). Despre quilling scria si
            Jean Austen in romanul “ Raţiune si simtire” precum si surorile
            Bronte in romanele lor. Aceasta arta nu era practicata de femeile de
            rand ci de cele din inalta societate realizand lucrari remarcabile
            cu care impodobeau cosuletele de lucru, scrinul, cabinetul,
            confecţionau rame pentru tablouri.”
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={felicitare} />
            <Name>Felicitari</Name>
          </Details>
          <Details>
            <img src={carduri} />
            <Name>Carduri nunta</Name>
          </Details>
          <Details>
            <img src={marturii} />
            <Name>Marturii botez</Name>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Quilling;
