import styled from "styled-components";

export const Container = styled.div`
  padding-top: 150px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FirstPart = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30%;
    border-radius: 50%;
    padding-right: 10px;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Descriere = styled.div`
  display: block;
`;

export const Name = styled.h2`
  color: #d2691e;
  font-size: 26px;
  padding-bottom: 10px;
  @media (max-width: 760px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: sans-serif;
  line-height: 1.5em;
`;

export const SecondPart = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 6rem 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Details = styled.div`
  width: 30%;
  margin: 5px 1%;
  padding: 15px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  img {
    width: 100%;
    padding-right: 10px;
  }
`;
