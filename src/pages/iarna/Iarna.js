import React from "react";
import Header from "../../components/header/Header";
import sigla from "../../images/dscn3958.jpg";
import bufnite from "../../images/1.jpg";
import omDeZapada from "../../images/20.jpg";
import podoabe from "../../images/10534096_493650120808135_6763510791754329058_n.jpg";
import manusi from "../../images/10.jpg";
import fundite from "../../images/16.jpg";
import set from "../../images/9.jpg";
import coronita from "../../images/poza-16.jpg";
import foto from "../../images/picture-069.jpg";
import cutiuta from "../../images/poza-27.jpg";
import {
  Container,
  FirstPart,
  Descriere,
  Text,
  SecondPart,
  Row,
  Details,
  Name,
} from "./Iarna.style";

const Iarna = () => {
  return (
    <Container>
      <Header />
      <FirstPart>
        <img src={sigla} />
        <Descriere>
          <Text>
            ” Crăciunul nu este o perioadă, nici un sezon, ci o stare de spirit.
            Adevăratul spirit al Crăciunului înseamnă să preţuieşti pacea şi
            bunăvoinţa, să oferi, din plin…” Deoarece spiritul Craciunului ne-a
            cuprins si cum nu este Craciun fara cadouri , va prezentam mai jos
            colectia de Sarbatori pe care am lucrat-o cu drag.
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={bufnite} />
            <Name>Briose Bufnite</Name>
          </Details>
          <Details>
            <img src={omDeZapada} />
            <Name>Pandativ Om-de-zapada</Name>
          </Details>
          <Details>
            <img src={podoabe} />
            <Name>Podoabe Bradut</Name>
          </Details>
          <Details>
            <img src={manusi} />
            <Name>Cercei Manusi</Name>
          </Details>
          <Details>
            <img src={fundite} />
            <Name>Cercei Fundite</Name>
          </Details>
          <Details>
            <img src={set} />
            <Name>Set Braduti</Name>
          </Details>
          <Details>
            <img src={coronita} />
            <Name>Coronita Craciun</Name>
          </Details>
          <Details>
            <img src={foto} />
            <Name>Rame Foto</Name>
          </Details>
          <Details>
            <img src={cutiuta} />
            <Name>Cutiuta amintiri</Name>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Iarna;
