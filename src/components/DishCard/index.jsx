import { Container } from "./styles";
import { QtySelect } from "../QtySelect";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

import FoodImg from "../../assets/food1.png";

export function DishCard({ data }) {
  return (
    <Container>
      <FiHeart />    
      <img src={FoodImg} alt="" />
      <h1>{data.name}</h1>
      <p>{`R$ ${data.price}`}</p>
      <QtySelect value="01" />
      <Button value="incluir" />
    </Container>
  );
};