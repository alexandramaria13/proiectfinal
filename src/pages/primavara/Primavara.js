import React from "react";
import imagine from "../../images/poza5.jpg";
import ravas from "../../images/poza3.jpg";
import buburuze from "../../images/dscn0338.jpg";
import floricele from "../../images/dscn0343.jpg";
import cercei from "../../images/dscn4262.jpg";
import fluturi from "../../images/dscn0344.jpg";
import culori from "../../images/dscn3923.jpg";
import set from "../../images/dscn4254.jpg";
import panselute from "../../images/dscn4263.jpg";
import bratara from "../../images/dscn5199.jpg";
import {
  Container,
  FirstPart,
  Descriere,
  Text,
  SecondPart,
  Row,
  Details,
  Name,
} from "./Primavara.style";

const Primavara = () => {
  return (
    <Container>
      <FirstPart>
        <img src={imagine} />
        <Descriere>
          <Text>
            “Dupa cum spune o veche legenda, in prima zi din luna martie,
            frumoasa Primavara a iesit la marginea padurii si a vazut intr-o
            poiana cum de sub zapada rasarise un ghiocel. Impresionata s-a
            hotarat sa il ajute , a inceput sa dea zapada si sa rupa ramurile
            uscate si spinoase din jurul sau. Vazand acestea, Iarna s-a infuriat
            si a chemat viforul si crivatul ca sa distruga plapanda floare
            reusind sa o omoare. Primavara a acoperit cu mainile ei micuta
            floare pentru a o proteja dar s-a ranit din cauza spinilor iar din
            degetul ei o picatura de sange cald s-a prelins si a cazut peste
            ghiocel aducandu-l din nou la viata. Astfel Primavara a invins
            Iarna, culorile snurului amintesc de sangele ei rosu cazut pe zapada
            alba, iar ghiocelul a devenit vestitorul primaverii.”
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={ravas} />
            <Name>Martisoare cu ravas</Name>
          </Details>
          <Details>
            <img src={buburuze} />
            <Name>Martisoare Buburuze</Name>
          </Details>
          <Details>
            <img src={floricele} />
            <Name>Martisoare Floricele</Name>
          </Details>
          <Details>
            <img src={cercei} />
            <Name>Cercei Floricele</Name>
          </Details>
          <Details>
            <img src={fluturi} />
            <Name>Set Fluturasi</Name>
          </Details>
          <Details>
            <img src={culori} />
            <Name>Cercei colorati</Name>
          </Details>
          <Details>
            <img src={set} />
            <Name>Set flori</Name>
          </Details>
          <Details>
            <img src={panselute} />
            <Name>Set panselute</Name>
          </Details>
          <Details>
            <img src={bratara} />
            <Name>Bratara din margelute</Name>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Primavara;
