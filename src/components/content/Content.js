import React from "react";
import { Link } from "../../pages/common.style";
import {
  Container,
  FirstPart,
  SecondPart,
  Row,
  Text,
  Details,
  Name,
  Descriere,
} from "./Content.style";
import sigla from "../../images/107995796_1647653675407768_7958757538034647290_o.jpg";
import Flori from "../../images/dscn0467.jpg";
import Primavara from "../../images/poza12.jpg";
import Origami from "../../images/dscn4265.jpg";
import Quilling from "../../images/dscn3947.jpg";
import Iarna from "../../images/dscn4093.jpg";
import Tablouri from "../../images/104931584_1630853717087764_2093466868992168546_n.jpg";

const Content = () => {
  return (
    <Container>
      <FirstPart>
        <img src={sigla} />
        <Descriere>
          <Name>Flori si Culori</Name>
          <Text>
            Flori si Culori este un loc unde invatati sa va bucurati in fiecare
            clipa de viata…aici veti gasi produse handmade originale si cu bun
            gust la preturi pentru toate buzunarele, aranjamente florale,
            decoratiuni quilling si origami…si ceea ce este important este ca,
            totul se face cu pasiune, dragoste si creativitate.
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={Iarna} />
            <Link to="/iarna">Colectia de iarna</Link>
          </Details>
          <Details>
            <img src={Primavara} />
            <Link to="/primavara">Colectia de primavara</Link>
          </Details>
          <Details>
            <img src={Flori} />
            <Link to="/flori">Aranjamente florale</Link>
          </Details>
          <Details>
            <img src={Quilling} />
            <Link to="/quilling">Arta Quilling</Link>
          </Details>
          <Details>
            <img src={Origami} />
            <Link to="/origami">Origami</Link>
          </Details>
          <Details>
            <img src={Tablouri} />
            <Link to="/tablouri">Tablouri din pietre</Link>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Content;
