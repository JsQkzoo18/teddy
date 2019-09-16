import styled from "styled-components";

import bag from "../../images/bag.png";
import filter from "../../images/filter.svg";

export const Button = styled.div`
  border: 1px #77c76e solid;
  background: #60af56;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 30px;
  margin-top: 10%;
  cursor: pointer;
  font-family: "Indie Flower", cursive, -apple-system;
  text-transform: uppercase;
  transform: scale(1);
  transition: 0.2s all;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    padding: 1rem;
  }
`;

export const Rules = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  background-color: #fff;
  color: #333;
  padding: 2rem;
  width: 90%;
  min-height: 90%;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    padding: 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }

`;
export const Container = styled.div`
  grid-area: cart;
  background-image: url(${bag});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15%;

  width: 70%;
  color: #333;
`;

export const Task = styled.div`
  position: relative;
  width: 55%;
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, 1fr));
  grid-template-rows: repeat(3, minmax(25%, 1fr));
  grid-gap: 1%;

  @media screen and (max-width: 768px) and (min-width:600px) {
    width: 45%;
  }


  > div {
    background-image: linear-gradient(
      to right bottom,
      rgba(0,0,0, 0.1),
      rgba(0,0,0, 0.2)
    );
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
      min-width: 20px;
      min-height: 20px;
      @media screen and (max-width: 768px) {
        padding: 3px;
        max-width: 40px;
        max-height: 40px;
      }
    }
    &.gray {
      filter: url(${filter}#grayscale);
      filter: gray;
      -webkit-filter: grayscale(1);
    }
  }
`;