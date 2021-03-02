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
} from "./Origami.style";
import imagine from "../../images/dscn4292.jpg";
import avion from "../../images/picture-043.jpg";
import lebede from "../../images/picture-907.jpg";
import casuta from "../../images/10492196_373689999470815_6674959455828970545_n.jpg";
import minion from "../../images/10885252_376159405890541_1709865859687361415_n.jpg";
import bicicleta from "../../images/11822610_450226931817121_6499151171592384047_n.jpg";
import papusa from "../../images/dscn4265.jpg";

const Origami = () => {
  return (
    <Container>
      <FirstPart>
        <img src={imagine} />
        <Descriere>
          <Text>
            “Numele „origami” provine din cuvintele japoneze „ori” – a împături
            şi „kami” – hârtie. După cum sugerează şi numele, origami este arta
            antică a împăturirii hârtiei, scopul fiind acela de a crea figuri
            prin plieri geometrice, fără tăia hârtia. Există multe stiluri de
            origami, acestea pornind de la cele mai simple compoziţii până la
            compoziţii extraordinar de complexe, alcătuite din mai multe unităţi
            origami pentru a forma un poliedru, precum şi reprezentări formate
            din două sau mai multe coli de hârtie. Cu toate aceste multe forme
            de abordare, cele mai simple forme de origami sunt modelele formate
            dintr-un pătrat de hârtie, fără a utiliza lipiciul. Se pot folosi
            diferite feluri de hârtie, de la cea subţire la cea groasă, precum
            şi hârtia velină a revistelor sau hârtia de împachetat.
          </Text>
        </Descriere>
      </FirstPart>
      <SecondPart>
        <Row>
          <Details>
            <img src={avion} />
            <Name>Avion</Name>
          </Details>
          <Details>
            <img src={lebede} />
            <Name>Lebede</Name>
          </Details>
          <Details>
            <img src={minion} />
            <Name>Minioni</Name>
          </Details>
          <Details>
            <img src={casuta} />
            <Name>Casuta</Name>
          </Details>
          <Details>
            <img src={bicicleta} />
            <Name>Biciclete</Name>
          </Details>
          <Details>
            <img src={papusa} />
            <Name>Papusi</Name>
          </Details>
        </Row>
      </SecondPart>
    </Container>
  );
};

export default Origami;
