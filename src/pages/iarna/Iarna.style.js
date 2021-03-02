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
`;

export const Descriere = styled.div`
  display: block;
`;

export const Name = styled.h2`
  color: #d2691e;
  font-size: 18px;
  padding-bottom: 10px;
  text-align: center;
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
`;

export const Details = styled.div`
  width: 30%;
  margin: 5px 1%;
  padding: 15px 10px;
  box-sizing: border-box;
  img {
    width: 100%;
    padding-right: 10px;
  }
`;
